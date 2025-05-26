import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { projects } from '@/data/projects';

export async function POST(request: NextRequest) {
  try {
    const thumbnailsDir = path.join(process.cwd(), 'public', 'thumbnails');
    const files = await fs.readdir(thumbnailsDir);

    // Get all used thumbnail filenames from projects
    const usedThumbnails = new Set(
      projects.map((p) => p.thumbnail.replace('/thumbnails/', ''))
    );

    // Find unused files
    const unused = files.filter((file) => !usedThumbnails.has(file));

    // Delete unused files
    await Promise.all(
      unused.map((file) => fs.unlink(path.join(thumbnailsDir, file)))
    );

    return NextResponse.json({ success: true, deleted: unused });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
} 