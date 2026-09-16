import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { messages, sessionId, isLeadCapture } = await request.json();

    const webhookUrl = process.env.N8N_WEBHOOK_URL || 'https://profithax.app.n8n.cloud/webhook/suhalayatravels.com';
    
    if (!webhookUrl) {
      console.warn("N8N_WEBHOOK_URL is not set. Using mock response for demonstration.");
      return NextResponse.json({ 
        reply: "Hello! I am the Suhalaya AI Assistant. This is a mock response because the n8n webhook URL is not yet configured. Please add N8N_WEBHOOK_URL to your .env.local file to connect to your n8n workflow." 
      });
    }

    // If it's a lead capture, format a special message for the backend
    let lastUserMessage = '';
    if (isLeadCapture) {
      lastUserMessage = `SYSTEM_NOTE: New user joined the chat. Contact: ${sessionId}`;
    } else {
      lastUserMessage = messages.filter(m => m.role === 'user').pop()?.content || '';
    }

    // Format full conversation transcript for clean 1-row display in Google Sheets
    const conversationTranscript = (messages && messages.length > 0)
      ? messages.map(m => `${m.role === 'user' ? 'Customer' : 'Support'}: ${m.content}`).join('\n')
      : lastUserMessage;

    const cleanContact = (sessionId || 'Anonymous').trim();

    const payload = {
      message: lastUserMessage.trim(),
      conversationTranscript: conversationTranscript.trim(),
      threadId: cleanContact,
      userContact: cleanContact,
      isLeadCapture: isLeadCapture || false,
      timestamp: new Date().toISOString(),
      formattedTime: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      source: 'Suhalaya Live Support'
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    let response;
    try {
      response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeoutId);
    }

    if (!response.ok) {
      const errorText = await response.text().catch(() => '');
      console.warn(`n8n webhook returned status ${response.status}:`, errorText);
      return NextResponse.json({
        reply: "Hello! Welcome to Suhalaya Travels. How can I assist you with your airport transfers, corporate fleet, or journey planning today?"
      });
    }

    const responseText = await response.text();
    let data = {};
    
    try {
      if (responseText) {
        data = JSON.parse(responseText);
      }
    } catch (e) {
      data = { reply: responseText };
    }
    
    // We expect n8n to return something like { reply: "..." }, { output: "..." } or similar
    const reply = data.reply || data.output || data.message || (responseText ? responseText : "Hello! Welcome to Suhalaya Travels. How can I assist you with your travel needs today?");

    return NextResponse.json({ reply });
    
  } catch (error) {
    console.error('Error in chat API:', error);
    // Graceful fallback so user never sees 'trouble connecting'
    return NextResponse.json({
      reply: "Hello! Welcome to Suhalaya Travels. How can I assist you with your corporate mobility, airport transfer, or outstation journey today?"
    });
  }
}
