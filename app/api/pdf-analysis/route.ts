import { NextResponse } from 'next/server'

// In-memory storage (you might want to use a proper database in production)
let analysisResults: any = null

export async function POST(request: Request) {
  try {
    const data = await request.json()
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