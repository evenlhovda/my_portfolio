import { NextResponse } from 'next/server'

interface AnalysisResult {
  json: {
    KID: number;
    Fakturanummer: number;
    Konto: string;
    Sum: number;
    Valuta: string;
    MVA: number;
    Avsender_Mva_nr: string;
    Avsender: string;
    Forfallsdato: string;
  };
  question: string;
  chatId: string;
  chatMessageId: string;
  isStreamValid: boolean;
  sessionId: string;
}

// In-memory storage with proper typing
let analysisResults: AnalysisResult | null = null

export async function POST(request: Request) {
  try {
    const data = await request.json() as AnalysisResult
    analysisResults = data
    
    return NextResponse.json({ 
      success: true, 
      message: 'Results stored successfully'
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to process data' },
      { status: 500 }
    )
  }
}

export async function GET() {
  if (!analysisResults) {
    return NextResponse.json({ 
      success: false, 
      message: 'No results available' 
    })
  }
  
  return NextResponse.json({ 
    success: true, 
    data: analysisResults 
  })
} 