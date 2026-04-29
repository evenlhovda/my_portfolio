import { NextRequest } from 'next/server';

const FLOWISE_URL = 'https://flowise-p9jk.onrender.com';

const CHATFLOW_MAP: Record<string, string> = {
  'assistant': 'cda3cd72-96e4-4c29-8622-630484eba075',
  'email': 'c75c8149-8648-4ac8-9ff5-7b74c1b43b80',
  'pdf': 'da6f6f1d-c43c-47d5-b54c-807b02c814c7',
};

async function handleProxy(request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  const params = await context.params;
  const pathArray = params.path;
  
  // Replace the mapped ID with the real ID in the URL path
  const mappedPath = pathArray.map(segment => CHATFLOW_MAP[segment] || segment).join('/');
  
  const targetUrl = `${FLOWISE_URL}/${mappedPath}${request.nextUrl.search}`;

  const headers = new Headers(request.headers);
  headers.set('host', new URL(FLOWISE_URL).host);
  // Remove headers that might cause issues
  headers.delete('origin');
  headers.delete('referer');

  try {
    const response = await fetch(targetUrl, {
      method: request.method,
      headers,
      body: request.method !== 'GET' && request.method !== 'HEAD' ? await request.blob() : undefined,
      // Pass redirect mode if needed, standard is manual to handle them locally
      redirect: 'manual',
    });

    const responseHeaders = new Headers(response.headers);
    // Remove CORS headers from upstream as Next.js API routes will handle it or they are not needed
    responseHeaders.delete('access-control-allow-origin');
    
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error('Flowise proxy error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export const GET = handleProxy;
export const POST = handleProxy;
export const PUT = handleProxy;
export const DELETE = handleProxy;
export const PATCH = handleProxy;
