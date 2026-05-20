/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  PrimaryButton,
  ContrastButton,
  SecondaryButton,
  OutlineContrastButton,
} from "@/components/ui/button-variants"

export default function ComponentsDemo() {
  return (
    <div className="min-h-screen bg-page p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <h1 className="mb-8 font-display text-h1 font-bold tracking-tight text-fg-1">
          Component Library
        </h1>

        <section>
          <h2 className="mb-4 font-display text-h2 font-bold tracking-snug text-fg-1">
            Buttons
          </h2>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton>Primary Button</PrimaryButton>
            <SecondaryButton>Secondary Button</SecondaryButton>
            <ContrastButton>Contrast Button</ContrastButton>
            <OutlineContrastButton>Outline Contrast</OutlineContrastButton>
          </div>
        </section>
      </div>
    </div>
  )
}
