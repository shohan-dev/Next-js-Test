import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const res = NextResponse.next();

    // Set CORS headers
    res.headers.set('Access-Control-Allow-Origin', '*');
    res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        return new Response(null, {
            status: 200,
            headers: res.headers,
        });
    }

    return res;
}

// Apply middleware to all routes
export const config = {
    matcher: '/api/:path*', // Apply only to API routes
};
