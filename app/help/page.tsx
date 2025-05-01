import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HelpCircle } from "lucide-react"

export default function HelpPage() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 text-center">
      <div className="flex flex-col items-center max-w-md space-y-6">
        <div className="p-4 rounded-full bg-primary/10">
          <HelpCircle className="w-16 h-16 text-primary" />
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Pusat Bantuan</h1>

        <p className="text-muted-foreground text-lg">
          Pusat bantuan kami sedang dalam proses pengembangan. Silakan kembali lagi nanti untuk panduan dan FAQ.
        </p>

        <div className="flex items-center justify-center p-4 rounded-lg bg-muted/50 w-full">
          <p className="text-sm text-muted-foreground">
            Untuk bantuan sementara, silakan hubungi kami melalui email di support@finnote.com
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <Button asChild className="w-full">
            <Link href="/">Kembali ke Beranda</Link>
          </Button>

          <Button variant="outline" asChild className="w-full">
            <Link href="/dashboard">Ke Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
