import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    const thumbnailsDir = path.join(process.cwd(), 'public', 'thumbnails');
    const files = await fs.readdir(thumbnailsDir);
    // Filter for image files only
    const images = files.filter(file => /\.(png|jpe?g|gif)$/i.test(file));
    return NextResponse.json({ thumbnails: images });
  } catch (error: any) {
    return NextResponse.json({ thumbnails: [], error: error.message }, { status: 500 });
  }
} 