import { NextResponse } from 'next/server';
import { aiEnabled, modelName } from '../../../lib/ai';

export const runtime = 'nodejs';

export async function GET() {
  return NextResponse.json({ aiEnabled, model: modelName });
}
