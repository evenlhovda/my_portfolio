/* eslint-disable @typescript-eslint/no-unused-vars */
import { 
  PrimaryButton,
  ContrastButton, 
  SecondaryButton, 
  OutlineContrastButton 
} from "@/components/ui/button-variants"

export default function ComponentsDemo() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-slate-100 mb-8">Component Library</h1>
        
        {/* Buttons Section */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-100 mb-4">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton>
              Primary Button
            </PrimaryButton>
            
            <SecondaryButton>
              Secondary Button
            </SecondaryButton>
            
            <ContrastButton>
              Contrast Button
            </ContrastButton>
            
            <OutlineContrastButton>
              Outline Contrast
            </OutlineContrastButton>
          </div>
        </section>
      </div>
    </div>
  )
} 