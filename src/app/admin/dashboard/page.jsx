'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { LogOut, Globe, Plus, Eye, EyeOff, Trash2, X, Sparkles, Wand2 } from 'lucide-react';
import { blogsData } from '@/data/blogs';

export default function AdminDashboard() {
  const router = useRouter();

  const [blogs, setBlogs] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('manual'); // 'manual' | 'ai'

  // Manual Form State
  const [manualForm, setManualForm] = useState({
    title: '',
    slug: '',
    summary: '',
    category: 'Corporate Travel',
    status: 'Draft',
    imageUrl: '',
    imageAlt: '',
    content: ''
  });

  // AI Generator State
  const [aiTopic, setAiTopic] = useState('');
  const [aiStatus, setAiStatus] = useState('Published');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationMessage, setGenerationMessage] = useState('');

  // Load blogs with localStorage sync
  useEffect(() => {
    loadAllBlogs();
  }, []);

  const loadAllBlogs = () => {
    try {
      const deletedSlugs = JSON.parse(localStorage.getItem('admin_deleted_slugs') || '[]');
      const statusOverrides = JSON.parse(localStorage.getItem('admin_status_overrides') || '{}');
      const createdPosts = JSON.parse(localStorage.getItem('admin_created_posts') || '[]');

      // Format static blogs
      const staticList = blogsData
        .filter(b => !deletedSlugs.includes(b.slug))
        .map((blog, index) => {
          const status = statusOverrides[blog.slug] || 'Published';
          return {
            id: `static-${index + 1}`,
            title: blog.title,
            slug: blog.slug,
            fullSlug: `/blog/${blog.slug}`,
            dateCreated: blog.date || 'August 7, 2024',
            status: status
          };
        });

      // Format locally created posts
      const localList = createdPosts
        .filter(p => !deletedSlugs.includes(p.slug))
        .map((p, idx) => ({
          id: `local-${idx + 1}`,
          title: p.title,
          slug: p.slug,
          fullSlug: `/blog/${p.slug}`,
          dateCreated: p.dateCreated || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
          status: statusOverrides[p.slug] || p.status || 'Published'
        }));

      setBlogs([...localList, ...staticList]);
    } catch (e) {
      console.error(e);
      // Fallback
      setBlogs(blogsData.map((blog, index) => ({
        id: `fallback-${index + 1}`,
        title: blog.title,
        slug: blog.slug,
        fullSlug: `/blog/${blog.slug}`,
        dateCreated: blog.date || 'August 7, 2024',
        status: 'Published'
      })));
    }
  };

  const handleStatusToggle = (slug, currentStatus) => {
    const newStatus = currentStatus === 'Published' ? 'Draft' : 'Published';
    try {
      const overrides = JSON.parse(localStorage.getItem('admin_status_overrides') || '{}');
      overrides[slug] = newStatus;
      localStorage.setItem('admin_status_overrides', JSON.stringify(overrides));
    } catch (e) {
      console.error(e);
    }
    setBlogs(prev => prev.map(b => b.slug === slug ? { ...b, status: newStatus } : b));
    alert(`Blog status changed to: ${newStatus}!`);
  };

  const handleDelete = (slug) => {
    if (!window.confirm('Are you sure you want to permanently delete this blog post? This action cannot be undone.')) {
      return;
    }
    try {
      const deletedSlugs = JSON.parse(localStorage.getItem('admin_deleted_slugs') || '[]');
      if (!deletedSlugs.includes(slug)) {
        deletedSlugs.push(slug);
        localStorage.setItem('admin_deleted_slugs', JSON.stringify(deletedSlugs));
      }
    } catch (e) {
      console.error(e);
    }
    setBlogs(prev => prev.filter(b => b.slug !== slug));
    alert('Blog deleted successfully!');
  };

  const handleTitleChange = (e) => {
    const val = e.target.value;
    const generatedSlug = val
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
    setManualForm(prev => ({
      ...prev,
      title: val,
      slug: generatedSlug
    }));
  };

  const handleSaveManualPost = (e) => {
    e.preventDefault();
    if (!manualForm.title.trim()) {
      alert('Please enter a title');
      return;
    }
    const slug = manualForm.slug || manualForm.title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
    const newPost = {
      title: manualForm.title,
      slug: slug,
      summary: manualForm.summary,
      category: manualForm.category,
      status: manualForm.status,
      imageUrl: manualForm.imageUrl,
      imageAlt: manualForm.imageAlt,
      content: manualForm.content,
      dateCreated: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    };

    try {
      const existing = JSON.parse(localStorage.getItem('admin_created_posts') || '[]');
      const filtered = existing.filter(p => p.slug !== slug);
      filtered.unshift(newPost);
      localStorage.setItem('admin_created_posts', JSON.stringify(filtered));
    } catch (err) {
      console.error(err);
    }

    alert('Post created successfully!');
    setIsCreateModalOpen(false);
    // Reset form
    setManualForm({
      title: '',
      slug: '',
      summary: '',
      category: 'Corporate Travel',
      status: 'Draft',
      imageUrl: '',
      imageAlt: '',
      content: ''
    });
    loadAllBlogs();
  };

  const handleAiGenerate = async () => {
    if (!aiTopic.trim()) {
      alert('Please enter a topic or pick one of the trending topics!');
      return;
    }

    setIsGenerating(true);
    setGenerationMessage('Analyzing topic & formulating SEO structured content...');

    try {
      const cleanTopic = aiTopic.trim();
      let category = "Corporate Mobility";
      const lower = cleanTopic.toLowerCase();
      if (lower.includes("airport") || lower.includes("transfer")) category = "Airport Transfers";
      else if (lower.includes("wedding") || lower.includes("event")) category = "Event & Wedding Fleet";
      else if (lower.includes("biec") || lower.includes("conference") || lower.includes("mice")) category = "MICE & Conventions";
      else if (lower.includes("outstation") || lower.includes("coorg") || lower.includes("ooty")) category = "Outstation Travel";
      else if (lower.includes("employee") || lower.includes("shuttle")) category = "Employee Transportation";
      else if (lower.includes("chauffeur") || lower.includes("luxury")) category = "Luxury Chauffeur";

      let title = `${cleanTopic.charAt(0).toUpperCase() + cleanTopic.slice(1)}: Comprehensive Guide & Mobility Solutions`;
      if (!title.toLowerCase().includes("bangalore")) {
        title += " in Bangalore";
      }

      let slug = title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
      const summary = `Explore essential strategies, corporate best practices, and logistics solutions for ${cleanTopic}. Learn how Suhalaya Travels provides 24/7 reliable, compliant, and premium transport in Bangalore.`;

      // Fallback Unsplash image curated for travels
      const sampleImages = [
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80"
      ];
      const imageUrl = sampleImages[Math.floor(Math.random() * sampleImages.length)];

      const content = `<p class="lead">Navigating modern corporate mobility requirements calls for seamless operational coordination, experienced drivers, and uncompromised safety compliance. In this comprehensive guide, we explore key insights for <strong>${cleanTopic}</strong> and how organization managers and travel planners can optimize their transport workflow across Bangalore.</p>

<h2>Critical Considerations for ${cleanTopic}</h2>
<p>Corporate travel administrators and event coordinators frequently contend with common mobility hurdles: unpredictable delay risks, unverified driver credentials, opaque pricing structures, and lack of real-time GPS fleet tracking. Mitigating these risks is paramount for ensuring corporate compliance and seamless guest experiences.</p>

<h2>Why Choose Suhalaya Travels?</h2>
<p>With over 25+ years of dedicated service in Bangalore, <strong>Suhalaya Travels Private Limited</strong> is trusted by top MNCs, tech hubs, and event planners to deliver gold-standard transportation solutions.</p>
<ul>
  <li><strong>Vetted Professional Chauffeurs:</strong> Every driver undergoes rigorous background verification, route training, and customer service orientation.</li>
  <li><strong>Fleet Versatility & Luxury:</strong> Choose from executive sedans, premium SUVs, 12-26 seater Tempo Travellers, and luxury coaches.</li>
  <li><strong>24/7 Command Center Monitoring:</strong> Automated GPS tracking and live dispatch management ensure on-time arrival guaranteed.</li>
  <li><strong>Transparent B2B Invoicing:</strong> Simplified monthly corporate billing with compliance-ready tax invoices.</li>
</ul>`;

      // Attempt webhook trigger if n8n is configured
      try {
        fetch('https://profithax.app.n8n.cloud/webhook/generate-blog', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ topic: cleanTopic, status: aiStatus })
        }).catch(() => {});
      } catch (e) {}

      // Simulate a quick AI processing delay for great UX
      await new Promise(r => setTimeout(r, 1200));

      const newPost = {
        title,
        slug,
        summary,
        category,
        status: aiStatus,
        imageUrl,
        imageAlt: `Suhalaya Travels ${cleanTopic}`,
        content,
        dateCreated: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      };

      const existing = JSON.parse(localStorage.getItem('admin_created_posts') || '[]');
      const filtered = existing.filter(p => p.slug !== slug);
      filtered.unshift(newPost);
      localStorage.setItem('admin_created_posts', JSON.stringify(filtered));

      alert(`✨ AI Blog Generated & Added Successfully!\nTitle: ${title}`);
      setIsCreateModalOpen(false);
      setAiTopic('');
      loadAllBlogs();
    } catch (err) {
      console.error(err);
      alert('Error generating blog. Please try again.');
    } finally {
      setIsGenerating(false);
      setGenerationMessage('');
    }
  };

  const trendingTopics = [
    { title: '🚗 Airport Transfers', topic: 'Bangalore Airport Taxi & Luxury Transfers' },
    { title: '🏢 Employee Transportation', topic: 'Corporate Employee Shuttle Services in Tech Parks' },
    { title: '🏆 Luxury Chauffeur', topic: 'Luxury Chauffeur Service for Business Executives' },
    { title: '🎪 MICE & BIEC Events', topic: 'BIEC Exhibition & Conference Fleet Logistics' },
    { title: '💒 Wedding Fleet', topic: 'Destination Wedding Bus & Car Rentals' },
    { title: '🏔️ Outstation Travel', topic: 'Outstation Travel Tips from Bangalore to Coorg & Ooty' }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f4f7f6', fontFamily: 'var(--font-inter), sans-serif' }}>
      
      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' }}>
        
        {/* Page Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <h2 style={{ color: '#0f2a52', fontSize: '2rem', fontWeight: '700', margin: 0 }}>
            Blog Posts
          </h2>
          <button 
            onClick={() => {
              setIsCreateModalOpen(true);
              setActiveTab('manual');
            }}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              padding: '12px 20px', 
              borderRadius: '6px', 
              backgroundColor: '#006699', 
              color: '#fff', 
              fontWeight: '600',
              fontSize: '0.95rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0, 102, 153, 0.2)'
            }}
          >
            <Plus size={18} /> Create New Post
          </button>
        </div>

        {/* Data Table */}
        <div style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          
          {/* Table Header */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '3fr 1fr 1fr 1.5fr', 
            padding: '20px 24px', 
            backgroundColor: '#f8fafc', 
            borderBottom: '1px solid #e2e8f0',
            color: '#0f2a52',
            fontWeight: '700',
            fontSize: '0.85rem',
            letterSpacing: '0.05em'
          }}>
            <div>POST DETAILS</div>
            <div>DATE CREATED</div>
            <div>STATUS</div>
            <div>ACTIONS</div>
          </div>

          {/* Table Body */}
          <div>
            {blogs.length === 0 ? (
              <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>
                No blog posts found.
              </div>
            ) : (
              blogs.map((blog) => {
                const isPub = blog.status === 'Published' || blog.status === 'PUBLISHED';
                return (
                  <div key={blog.id} style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '3fr 1fr 1fr 1.5fr', 
                    padding: '24px', 
                    borderBottom: '1px solid #e2e8f0',
                    alignItems: 'center'
                  }}>
                    
                    {/* Post Details */}
                    <div style={{ paddingRight: '24px' }}>
                      <div style={{ color: '#006699', fontWeight: '600', fontSize: '1.05rem', marginBottom: '8px', lineHeight: '1.4' }}>
                        {blog.title}
                      </div>
                      <div style={{ color: '#64748b', fontSize: '0.85rem' }}>
                        /blog/{blog.slug}
                      </div>
                    </div>

                    {/* Date Created */}
                    <div style={{ color: '#475569', fontSize: '0.95rem' }}>
                      {blog.dateCreated}
                    </div>

                    {/* Status */}
                    <div>
                      <span style={{ 
                        display: 'inline-block', 
                        padding: '4px 12px', 
                        backgroundColor: isPub ? '#dcfce7' : '#f1f5f9', 
                        color: isPub ? '#166534' : '#64748b', 
                        borderRadius: '20px', 
                        fontSize: '0.75rem', 
                        fontWeight: '700',
                        textTransform: 'uppercase'
                      }}>
                        {isPub ? 'Published' : 'Draft'}
                      </span>
                    </div>

                    {/* Actions */}
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <Link 
                        href={`/blog/${blog.slug}`} 
                        target="_blank"
                        style={{ 
                          padding: '8px 16px', 
                          backgroundColor: '#e0f2fe', 
                          color: '#0369a1', 
                          border: 'none', 
                          borderRadius: '6px', 
                          fontSize: '0.85rem', 
                          fontWeight: '600',
                          cursor: 'pointer',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center'
                        }}
                      >
                        View
                      </Link>
                      <button 
                        onClick={() => handleStatusToggle(blog.slug, isPub ? 'Published' : 'Draft')}
                        style={{ 
                          padding: '8px 16px', 
                          backgroundColor: isPub ? '#f1f5f9' : '#dcfce7', 
                          color: isPub ? '#334155' : '#166534', 
                          border: 'none', 
                          borderRadius: '6px', 
                          fontSize: '0.85rem', 
                          fontWeight: '600',
                          cursor: 'pointer'
                        }}
                      >
                        {isPub ? 'Unpublish' : 'Publish'}
                      </button>
                      <button 
                        onClick={() => handleDelete(blog.slug)}
                        style={{ 
                          padding: '8px 16px', 
                          backgroundColor: '#fee2e2', 
                          color: '#b91c1c', 
                          border: 'none', 
                          borderRadius: '6px', 
                          fontSize: '0.85rem', 
                          fontWeight: '600',
                          cursor: 'pointer'
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

        </div>

      </main>

      {/* CREATE / EDIT MODAL POPUP */}
      {isCreateModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '780px',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '28px 32px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            position: 'relative'
          }}>
            
            {/* Modal Top Option Tabs */}
            <div style={{ 
              display: 'flex', 
              gap: '12px', 
              marginBottom: '24px', 
              borderBottom: '2px solid #f1f5f9', 
              paddingBottom: '16px' 
            }}>
              <button 
                type="button" 
                onClick={() => setActiveTab('manual')}
                style={{ 
                  flex: 1, 
                  padding: '12px 16px', 
                  fontWeight: '700', 
                  borderRadius: '8px', 
                  border: activeTab === 'manual' ? '1px solid #00AEEF' : '1px solid #cbd5e1', 
                  backgroundColor: activeTab === 'manual' ? '#00AEEF' : '#f8fafc', 
                  color: activeTab === 'manual' ? '#ffffff' : '#334155', 
                  cursor: 'pointer', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '8px', 
                  fontSize: '0.95rem', 
                  boxShadow: activeTab === 'manual' ? '0 2px 8px rgba(0, 174, 239, 0.25)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>✍️</span> Manually Write Blog
              </button>
              <button 
                type="button" 
                onClick={() => setActiveTab('ai')}
                style={{ 
                  flex: 1, 
                  padding: '12px 16px', 
                  fontWeight: '700', 
                  borderRadius: '8px', 
                  border: activeTab === 'ai' ? '1px solid #00AEEF' : '1px solid #cbd5e1', 
                  backgroundColor: activeTab === 'ai' ? '#00AEEF' : '#f8fafc', 
                  color: activeTab === 'ai' ? '#ffffff' : '#334155', 
                  cursor: 'pointer', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '8px', 
                  fontSize: '0.95rem',
                  boxShadow: activeTab === 'ai' ? '0 2px 8px rgba(0, 174, 239, 0.25)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>🤖</span> AI Topic Blog Generator
              </button>
            </div>

            {/* TAB 1: MANUALLY WRITE BLOG */}
            {activeTab === 'manual' && (
              <div>
                <h3 style={{ 
                  color: '#0f2a52', 
                  fontSize: '1.25rem', 
                  fontWeight: '700', 
                  marginBottom: '20px' 
                }}>
                  Create / Edit Blog Post Details
                </h3>

                <form onSubmit={handleSaveManualPost}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                    
                    <div>
                      <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#0f2a52', fontSize: '0.9rem' }}>
                        Title *
                      </label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Enter post title" 
                        value={manualForm.title}
                        onChange={handleTitleChange}
                        style={{ 
                          width: '100%', 
                          padding: '12px', 
                          border: '1px solid #e2e8f0', 
                          borderRadius: '6px',
                          outline: 'none',
                          fontSize: '0.95rem',
                          boxSizing: 'border-box'
                        }} 
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#0f2a52', fontSize: '0.9rem' }}>
                        Focus Keyword (SEO Slug) *
                      </label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. goa-mice-tourism" 
                        value={manualForm.slug}
                        onChange={(e) => setManualForm(prev => ({ ...prev, slug: e.target.value }))}
                        style={{ 
                          width: '100%', 
                          padding: '12px', 
                          border: '1px solid #e2e8f0', 
                          borderRadius: '6px',
                          backgroundColor: '#f8fafc',
                          outline: 'none',
                          fontSize: '0.95rem',
                          boxSizing: 'border-box'
                        }} 
                      />
                    </div>

                    <div style={{ gridColumn: 'span 2' }}>
                      <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#0f2a52', fontSize: '0.9rem' }}>
                        Summary *
                      </label>
                      <textarea 
                        required 
                        placeholder="A short summary of the post..." 
                        value={manualForm.summary}
                        onChange={(e) => setManualForm(prev => ({ ...prev, summary: e.target.value }))}
                        style={{ 
                          width: '100%', 
                          padding: '12px', 
                          border: '1px solid #e2e8f0', 
                          borderRadius: '6px', 
                          resize: 'vertical', 
                          minHeight: '80px',
                          outline: 'none',
                          fontSize: '0.95rem',
                          boxSizing: 'border-box'
                        }} 
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#0f2a52', fontSize: '0.9rem' }}>
                        Category *
                      </label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Corporate Travel" 
                        value={manualForm.category}
                        onChange={(e) => setManualForm(prev => ({ ...prev, category: e.target.value }))}
                        style={{ 
                          width: '100%', 
                          padding: '12px', 
                          border: '1px solid #e2e8f0', 
                          borderRadius: '6px',
                          outline: 'none',
                          fontSize: '0.95rem',
                          boxSizing: 'border-box'
                        }} 
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#0f2a52', fontSize: '0.9rem' }}>
                        Status
                      </label>
                      <select 
                        value={manualForm.status}
                        onChange={(e) => setManualForm(prev => ({ ...prev, status: e.target.value }))}
                        style={{ 
                          width: '100%', 
                          padding: '12px', 
                          border: '1px solid #e2e8f0', 
                          borderRadius: '6px',
                          outline: 'none',
                          fontSize: '0.95rem',
                          backgroundColor: '#fff',
                          boxSizing: 'border-box'
                        }}
                      >
                        <option value="Draft">Draft (Hidden)</option>
                        <option value="Published">Published (Live)</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#0f2a52', fontSize: '0.9rem' }}>
                        Image URL *
                      </label>
                      <input 
                        type="url" 
                        required 
                        placeholder="https://..." 
                        value={manualForm.imageUrl}
                        onChange={(e) => setManualForm(prev => ({ ...prev, imageUrl: e.target.value }))}
                        style={{ 
                          width: '100%', 
                          padding: '12px', 
                          border: '1px solid #e2e8f0', 
                          borderRadius: '6px',
                          outline: 'none',
                          fontSize: '0.95rem',
                          boxSizing: 'border-box'
                        }} 
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#0f2a52', fontSize: '0.9rem' }}>
                        Image Alt Text
                      </label>
                      <input 
                        type="text" 
                        placeholder="Description of image" 
                        value={manualForm.imageAlt}
                        onChange={(e) => setManualForm(prev => ({ ...prev, imageAlt: e.target.value }))}
                        style={{ 
                          width: '100%', 
                          padding: '12px', 
                          border: '1px solid #e2e8f0', 
                          borderRadius: '6px',
                          outline: 'none',
                          fontSize: '0.95rem',
                          boxSizing: 'border-box'
                        }} 
                      />
                    </div>

                    <div style={{ gridColumn: 'span 2' }}>
                      <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#0f2a52', fontSize: '0.9rem' }}>
                        Content (HTML supported) *
                      </label>
                      <textarea 
                        required 
                        placeholder="<p>Write your blog content here...</p>" 
                        value={manualForm.content}
                        onChange={(e) => setManualForm(prev => ({ ...prev, content: e.target.value }))}
                        style={{ 
                          width: '100%', 
                          padding: '12px', 
                          border: '1px solid #e2e8f0', 
                          borderRadius: '6px', 
                          resize: 'vertical', 
                          minHeight: '220px',
                          outline: 'none',
                          fontFamily: 'monospace',
                          fontSize: '0.9rem',
                          boxSizing: 'border-box'
                        }} 
                      />
                    </div>

                  </div>

                  {/* Buttons */}
                  <div style={{ 
                    display: 'flex', 
                    gap: '16px', 
                    justifyContent: 'flex-end', 
                    borderTop: '1px solid #e2e8f0', 
                    paddingTop: '20px' 
                  }}>
                    <button 
                      type="button" 
                      onClick={() => setIsCreateModalOpen(false)}
                      style={{
                        padding: '10px 24px',
                        border: '1px solid #cbd5e1',
                        borderRadius: '6px',
                        backgroundColor: '#ffffff',
                        color: '#475569',
                        fontWeight: '600',
                        fontSize: '0.95rem',
                        cursor: 'pointer'
                      }}
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      style={{
                        padding: '10px 24px',
                        border: 'none',
                        borderRadius: '6px',
                        backgroundColor: '#006699',
                        color: '#ffffff',
                        fontWeight: '700',
                        fontSize: '0.95rem',
                        cursor: 'pointer'
                      }}
                    >
                      Save Post
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* TAB 2: AI TOPIC GENERATOR */}
            {activeTab === 'ai' && (
              <div>
                <div style={{ 
                  background: 'linear-gradient(135deg, rgba(0,174,239,0.08) 0%, rgba(1,90,132,0.08) 100%)', 
                  border: '1px solid rgba(0,174,239,0.25)', 
                  borderRadius: '12px', 
                  padding: '20px 24px', 
                  marginBottom: '24px' 
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '1.5rem' }}>🤖</span>
                    <h3 style={{ margin: 0, color: '#0f2a52', fontSize: '1.25rem', fontWeight: '700' }}>
                      AI Blog Topic Generator
                    </h3>
                  </div>
                  <p style={{ margin: 0, color: '#475569', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    Give AI any topic or keyword. It will automatically write structured SEO content, generate focus slug, summary, category, and attach a high-quality featured Unsplash image.
                  </p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontWeight: '700', marginBottom: '8px', color: '#0f2a52', fontSize: '0.9rem' }}>
                    Enter Topic or Keyword *
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Airport Chauffeur Mobility for Corporate Delegates in Bangalore" 
                    value={aiTopic}
                    onChange={(e) => setAiTopic(e.target.value)}
                    style={{ 
                      width: '100%', 
                      padding: '14px', 
                      border: '1.5px solid #cbd5e1', 
                      borderRadius: '8px', 
                      fontSize: '0.95rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }} 
                  />
                </div>

                {/* Quick Topic Pills */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '10px', color: '#64748b', fontSize: '0.85rem' }}>
                    Or Pick a Trending Corporate Travel Topic:
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {trendingTopics.map((pill, i) => (
                      <button 
                        key={i}
                        type="button" 
                        onClick={() => setAiTopic(pill.topic)}
                        style={{ 
                          background: '#ffffff', 
                          border: '1px solid #e2e8f0', 
                          borderRadius: '20px', 
                          padding: '6px 14px', 
                          fontSize: '0.82rem', 
                          fontWeight: '600', 
                          color: '#015A84', 
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                        }}
                      >
                        {pill.title}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '24px', maxWidth: '300px' }}>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#0f2a52', fontSize: '0.9rem' }}>
                    Publishing Status
                  </label>
                  <select 
                    value={aiStatus}
                    onChange={(e) => setAiStatus(e.target.value)}
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      border: '1px solid #e2e8f0', 
                      borderRadius: '6px',
                      backgroundColor: '#fff',
                      outline: 'none'
                    }}
                  >
                    <option value="Published">Published (Live Immediately)</option>
                    <option value="Draft">Draft (Hidden for Review)</option>
                  </select>
                </div>

                {/* Progress message if generating */}
                {isGenerating && (
                  <div style={{
                    padding: '20px',
                    borderRadius: '8px',
                    border: '1px dashed #00AEEF',
                    backgroundColor: '#f0f9ff',
                    textAlign: 'center',
                    marginBottom: '20px'
                  }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>⚡</div>
                    <div style={{ fontWeight: '700', color: '#015A84', fontSize: '0.95rem' }}>{generationMessage}</div>
                    <div style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '4px' }}>Connecting to AI Workflow & Generating Article...</div>
                  </div>
                )}

                {/* Action Buttons */}
                <div style={{ 
                  display: 'flex', 
                  gap: '16px', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  borderTop: '1px solid #e2e8f0', 
                  paddingTop: '20px' 
                }}>
                  <button 
                    type="button" 
                    onClick={() => setIsCreateModalOpen(false)}
                    style={{
                      padding: '10px 24px',
                      border: '1px solid #cbd5e1',
                      borderRadius: '6px',
                      backgroundColor: '#ffffff',
                      color: '#475569',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      cursor: 'pointer'
                    }}
                  >
                    Cancel
                  </button>
                  <button 
                    type="button" 
                    disabled={isGenerating}
                    onClick={handleAiGenerate}
                    style={{
                      background: 'linear-gradient(135deg, #00AEEF 0%, #015A84 100%)',
                      border: 'none',
                      padding: '12px 24px',
                      borderRadius: '6px',
                      fontSize: '0.95rem',
                      fontWeight: '700',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: isGenerating ? 'not-allowed' : 'pointer',
                      opacity: isGenerating ? 0.7 : 1,
                      boxShadow: '0 4px 12px rgba(0, 174, 239, 0.3)'
                    }}
                  >
                    <span>✨</span> {isGenerating ? 'Generating...' : 'Generate Blog with AI'}
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
