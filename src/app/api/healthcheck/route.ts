import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        status: `ok`,
        health: `100%`,
        message: `Welcome to Health Check API`,
    });
}