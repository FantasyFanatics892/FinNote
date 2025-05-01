"use client"

import { Button } from "@/components/ui/button"
import { Clock, Construction } from "lucide-react"

interface ComingSoonProps {
  title?: string
  description?: string
  showBackButton?: boolean
  onBack?: () => void
  backButtonText?: string
}

export default function ComingSoon({
  title = "Fitur Dalam Pengembangan",
  description = "Fitur ini sedang dalam proses pengembangan dan akan segera tersedia.",
  showBackButton = false,
  onBack,
  backButtonText = "Kembali",
}: ComingSoonProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-[300px] p-6 text-center">
      <div className="flex flex-col items-center max-w-md space-y-4">
        <div className="p-3 rounded-full bg-primary/10">
          <Construction className="w-10 h-10 text-primary" />
        </div>

        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>

        <p className="text-muted-foreground">{description}</p>

        <div className="flex items-center justify-center p-3 rounded-lg bg-muted/50 w-full">
          <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Tim kami sedang bekerja keras untuk menyelesaikan fitur ini.</p>
        </div>

        {showBackButton && (
          <Button onClick={onBack} variant="outline">
            {backButtonText}
          </Button>
        )}
      </div>
    </div>
  )
}
