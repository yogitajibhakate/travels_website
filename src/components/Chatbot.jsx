'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Send, User, Loader2, ArrowRight, MessageSquare, Headset, MoreVertical, Trash2, LogOut } from 'lucide-react';

export default function Chatbot({ isOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => Math.random().toString(36).substring(2, 15));
  const [contactInfo, setContactInfo] = useState('');
  const [contactInput, setContactInput] = useState('');
  const [isChatActive, setIsChatActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const messagesEndRef = useRef(null);
  const menuRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  useEffect(() => {
    const savedContact = localStorage.getItem('suhalaya_chat_contact');
    if (savedContact) {
      setContactInfo(savedContact);
      setIsChatActive(true);
    }
    try {
      const savedMessages = localStorage.getItem('suhalaya_chat_messages');
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
      }
    } catch (e) {
      console.warn('Failed to parse saved chat messages', e);
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('suhalaya_chat_messages', JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMenu]);

  const handleClearChat = () => {
    setMessages([]);
    localStorage.removeItem('suhalaya_chat_messages');
    setShowClearConfirm(false);
    setShowMenu(false);
  };

  const handleSwitchAccount = () => {
    localStorage.removeItem('suhalaya_chat_contact');
    localStorage.removeItem('suhalaya_chat_messages');
    setContactInfo('');
    setContactInput('');
    setMessages([]);
    setIsChatActive(false);
    setShowMenu(false);
  };

  if (!isOpen) return null;

  const handleSend = async (text) => {
    const messageText = typeof text === 'string' ? text : input;
    if (!messageText.trim() || isLoading) return;

    const userMessage = { role: 'user', content: messageText.trim() };
    const newMessages = [...messages, userMessage];
    
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages, sessionId: contactInfo || sessionId })
      });

      if (!response.ok) throw new Error('API Error');

      const data = await response.json();
      
      setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      console.error('Failed to send message:', error);
      setMessages([
        ...newMessages, 
        { role: 'assistant', content: 'Sorry, I am having trouble connecting right now. Please try again later.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestedPrompts = [
    "Connect with the Suhalaya Booking Desk",
    "I want to learn about outstation packages",
    "I need an airport transfer quotation"
  ];

  const handleStartChat = async (e) => {
    e.preventDefault();
    if (!contactInput.trim()) return;
    
    const contact = contactInput.trim();
    localStorage.setItem('suhalaya_chat_contact', contact);
    setContactInfo(contact);
    setIsChatActive(true);

    // Notify backend about new lead
    try {
      await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: [], 
          sessionId: contact, 
          isLeadCapture: true 
        })
      });
    } catch (error) {
      console.error('Failed to send lead capture notification', error);
    }
  };

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '90px',
        right: '24px',
        zIndex: 1500,
        width: '380px',
        maxWidth: 'calc(100vw - 48px)',
        height: '540px',
        maxHeight: 'calc(100vh - 120px)',
        display: 'flex',
        flexDirection: 'column',
        animation: 'fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        boxShadow: '0 24px 48px rgba(0,0,0,0.2), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        overflow: 'hidden'
      }}
    >
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .chat-scrollbar::-webkit-scrollbar { width: 6px; }
        .chat-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .chat-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 10px; }
      `}</style>

      {/* Dynamic Header */}
      <div style={{
        background: 'linear-gradient(135deg, #5C6BC0 0%, #3949AB 100%)',
        padding: messages.length === 0 ? '24px' : '16px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: messages.length === 0 ? '16px' : '0',
        transition: 'all 0.3s ease'
      }}>
        {/* Header Top Row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <h3 style={{ margin: 0, color: '#FFF', fontSize: messages.length === 0 ? '1.4rem' : '1.1rem', fontWeight: '700' }}>
              Suhalaya Support
            </h3>
            {messages.length === 0 && (
              <span style={{ 
                background: 'rgba(255,255,255,0.9)', 
                color: '#3949AB', 
                fontSize: '0.7rem', 
                fontWeight: '700', 
                padding: '2px 6px', 
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4CAF50' }}></div>
                Online
              </span>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Options Menu (WhatsApp style) */}
            {isChatActive && (
              <div ref={menuRef} style={{ position: 'relative' }}>
                <button 
                  onClick={() => setShowMenu(!showMenu)}
                  title="Chat Options"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFF',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                >
                  <MoreVertical size={16} />
                </button>

                {showMenu && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '36px',
                      right: '0',
                      background: '#FFF',
                      borderRadius: '10px',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
                      padding: '6px 0',
                      minWidth: '200px',
                      zIndex: 100,
                      animation: 'fadeIn 0.15s ease'
                    }}
                  >
                    {contactInfo && (
                      <div style={{ padding: '8px 14px', borderBottom: '1px solid #F3F4F6', fontSize: '0.75rem', color: '#6B7280' }}>
                        <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#9CA3AF', marginBottom: '2px' }}>Active Contact</div>
                        <div style={{ fontWeight: '700', color: '#1F2937', wordBreak: 'break-all' }}>{contactInfo}</div>
                      </div>
                    )}

                    <button
                      onClick={() => {
                        setShowMenu(false);
                        setShowClearConfirm(true);
                      }}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 14px',
                        border: 'none',
                        background: 'transparent',
                        color: '#D32F2F',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFEBEE'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <Trash2 size={14} color="#D32F2F" />
                      <span>Clear Chat</span>
                    </button>

                    <button
                      onClick={handleSwitchAccount}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 14px',
                        border: 'none',
                        background: 'transparent',
                        color: '#374151',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        textAlign: 'left',
                        borderTop: '1px solid #F3F4F6'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <LogOut size={14} color="#6B7280" />
                      <span>Change Email / Phone</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            <button 
              onClick={onClose}
              style={{ background: 'none', border: 'none', color: '#FFF', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Empty State Header Content */}
        {isChatActive && messages.length === 0 && (
          <>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', lineHeight: '1.4' }}>
              Get helpful guidance and travel recommendations directly from our support team.
            </p>
            <div style={{
              background: '#FFF',
              borderRadius: '8px',
              padding: '4px 4px 4px 16px',
              display: 'flex',
              alignItems: 'center',
              marginTop: '4px'
            }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask a question"
                style={{ flex: 1, border: 'none', outline: 'none', fontSize: '0.95rem', color: '#333' }}
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                style={{
                  background: input.trim() ? '#B0BEC5' : '#E0E0E0',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: input.trim() ? 'pointer' : 'not-allowed',
                  transition: 'background 0.2s'
                }}
              >
                <ArrowRight size={16} color="#FFF" />
              </button>
            </div>
          </>
        )}
      </div>

      {/* Body Area */}
      {!isChatActive ? (
        // Lead Capture Screen
        <div style={{ flex: 1, padding: '32px 24px', display: 'flex', flexDirection: 'column', overflowY: 'auto', backgroundColor: '#F9FAFB' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#E8EAF6', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
              <Headset size={32} color="#3949AB" />
            </div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: '#333' }}>Welcome to Live Support</h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#666', lineHeight: '1.5' }}>
              Please enter your Email ID or Phone Number to start chatting. We'll use this to keep your conversation history intact.
            </p>
          </div>
          
          <form onSubmit={handleStartChat} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.85rem', fontWeight: '600', color: '#555' }}>
                Email ID or Phone Number *
              </label>
              <input
                type="text"
                required
                value={contactInput}
                onChange={(e) => setContactInput(e.target.value)}
                placeholder="e.g. user@example.com or +91 9999999999"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1px solid #D1D5DB',
                  fontSize: '0.95rem',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3949AB'}
                onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
              />
            </div>
            <button
              type="submit"
              disabled={!contactInput.trim()}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '8px',
                background: contactInput.trim() ? 'linear-gradient(135deg, #5C6BC0 0%, #3949AB 100%)' : '#E5E7EB',
                color: contactInput.trim() ? '#FFF' : '#9CA3AF',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: contactInput.trim() ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.2s'
              }}
            >
              Start Chat
              <ArrowRight size={18} />
            </button>
          </form>
          
          <div style={{ marginTop: 'auto', paddingTop: '24px', textAlign: 'center' }}>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#888' }}>
              Your data is secure and will only be used for support purposes.
            </p>
          </div>
        </div>
      ) : messages.length === 0 ? (
        // Empty State Suggestions
        <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
          <p style={{ margin: '0 0 16px 0', color: '#666', fontSize: '0.9rem', fontWeight: '500' }}>
            Tell us a little bit about what you're looking for.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {suggestedPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                style={{
                  textAlign: 'left',
                  padding: '16px',
                  background: 'linear-gradient(90deg, rgba(227,242,253,0.5) 0%, rgba(243,229,245,0.5) 100%)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  borderRadius: '8px',
                  color: '#333',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, boxShadow 0.2s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                {prompt}
              </button>
            ))}
          </div>
          <div style={{ marginTop: 'auto', paddingTop: '20px', textAlign: 'center' }}>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#888' }}>
              By chatting, you agree to this <a href="#" style={{ color: '#3949AB', textDecoration: 'none' }}>disclaimer</a>.
            </p>
          </div>
        </div>
      ) : (
        // Active Chat Area
        <>
          <div className="chat-scrollbar" style={{
            flex: 1,
            padding: '20px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            backgroundColor: '#F9FAFB'
          }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                flexDirection: msg.role === 'user' ? 'row-reverse' : 'row'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: msg.role === 'user' ? '#3949AB' : '#FFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: msg.role === 'assistant' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none'
                }}>
                  {msg.role === 'user' ? <User size={16} color="#FFF" /> : <Headset size={16} color="#3949AB" />}
                </div>
                <div style={{
                  background: msg.role === 'user' ? '#3949AB' : '#FFF',
                  padding: '12px 16px',
                  borderRadius: '16px',
                  borderTopRightRadius: msg.role === 'user' ? '4px' : '16px',
                  borderTopLeftRadius: msg.role === 'assistant' ? '4px' : '16px',
                  color: msg.role === 'user' ? '#FFF' : '#333',
                  fontSize: '0.9rem',
                  lineHeight: '1.5',
                  maxWidth: '80%',
                  boxShadow: msg.role === 'assistant' ? '0 2px 8px rgba(0,0,0,0.05)' : 'none'
                }}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                  <Headset size={16} color="#3949AB" />
                </div>
                <div style={{ background: '#FFF', padding: '12px 16px', borderRadius: '16px', borderTopLeftRadius: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center' }}>
                  <Loader2 size={16} color="#3949AB" className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Active Chat Input */}
          <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} style={{
            padding: '16px',
            borderTop: '1px solid #EEE',
            display: 'flex',
            gap: '12px',
            background: '#FFF'
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              disabled={isLoading}
              style={{
                flex: 1,
                background: '#F3F4F6',
                border: '1px solid transparent',
                borderRadius: '24px',
                padding: '10px 16px',
                color: '#333',
                fontSize: '0.9rem',
                outline: 'none',
                transition: 'border-color 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3949AB'}
              onBlur={(e) => e.target.style.borderColor = 'transparent'}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: input.trim() && !isLoading ? '#3949AB' : '#E5E7EB',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: input.trim() && !isLoading ? 'pointer' : 'not-allowed',
                transition: 'transform 0.2s',
                flexShrink: 0
              }}
            >
              <Send size={18} color={input.trim() && !isLoading ? '#FFF' : '#9CA3AF'} style={{ marginLeft: '2px' }} />
            </button>
          </form>
        </>
      )}

      {/* WhatsApp-Style Clear Chat Confirmation Modal */}
      {showClearConfirm && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.45)',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            backdropFilter: 'blur(2px)',
            animation: 'fadeIn 0.2s ease'
          }}
        >
          <div
            style={{
              backgroundColor: '#FFF',
              borderRadius: '16px',
              padding: '24px 20px',
              maxWidth: '300px',
              width: '100%',
              boxShadow: '0 16px 36px rgba(0,0,0,0.25)',
              textAlign: 'center'
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: '#FFEBEE',
                color: '#D32F2F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 12px'
              }}
            >
              <Trash2 size={22} />
            </div>
            <h4 style={{ margin: '0 0 6px', fontSize: '1.05rem', color: '#1F2937', fontWeight: '700' }}>
              Clear this chat?
            </h4>
            <p style={{ margin: '0 0 20px', fontSize: '0.84rem', color: '#6B7280', lineHeight: '1.4' }}>
              Messages will be deleted from your screen only. Our support team will retain the history for seamless assistance.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                type="button"
                onClick={() => setShowClearConfirm(false)}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid #E5E7EB',
                  backgroundColor: '#F9FAFB',
                  color: '#374151',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleClearChat}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: '#DC2626',
                  color: '#FFF',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 2px 6px rgba(220,38,38,0.3)'
                }}
              >
                Clear Chat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
