import { NextResponse } from 'next/server';

export async function GET() {


    return NextResponse.json({
        message: 'Hello World! today is a good day',
    });
}

