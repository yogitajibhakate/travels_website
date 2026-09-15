export const dynamic = 'force-dynamic';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxZa8Us-jLPF6ffpNTui5z64_ocpuB5FCZQAw1vN8wOu3MIfBhLwi6BsjlewOIfamQI4w/exec';

export async function GET() {
  try {
    const res = await fetch(SCRIPT_URL, {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json'
      }
    });

    const text = await res.text();
    
    // Check if Google returned an HTML error/login page
    if (!text || text.trim().startsWith('<')) {
      console.warn('Google Apps Script returned HTML instead of JSON:', text.slice(0, 100));
      return Response.json([], { status: 200 });
    }

    const data = JSON.parse(text);
    return Response.json(Array.isArray(data) ? data : [], { status: 200 });
  } catch (error) {
    console.error('API /api/blogs error:', error);
    return Response.json([], { status: 200 });
  }
}
