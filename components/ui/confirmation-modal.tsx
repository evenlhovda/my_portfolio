'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ConfirmationModal({ isOpen, onClose }: ConfirmationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Takk for interessen!</DialogTitle>
        </DialogHeader>
        <div className="text-center space-y-4 text-slate-300">
          <p>
            Takk for at du tester denne flyten! Denne demoen stopper dessverre her. Ingen data blir lagret eller sendt til noe sted, men det kunne vært interessant å se hvordan dette kunne vært implementert.
          </p>
          <p>
            Ta gjerne kontakt om du vil vite mer om hvordan lignende løsninger kan være av verdi for deg!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
} 