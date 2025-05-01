import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Construction } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 text-center">
      <div className="flex flex-col items-center max-w-md space-y-6">
        <div className="p-4 rounded-full bg-primary/10">
          <Construction className="w-16 h-16 text-primary" />
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Halaman Harga</h1>

        <p className="text-muted-foreground text-lg">
          Halaman harga sedang dalam proses pengembangan. Silakan kembali lagi nanti untuk melihat paket berlangganan
          kami.
        </p>

        <div className="flex items-center justify-center p-4 rounded-lg bg-muted/50 w-full">
          <p className="text-sm text-muted-foreground">
            Saat ini FinNote tersedia dalam versi beta gratis untuk semua pengguna.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <Button asChild className="w-full">
            <Link href="/">Kembali ke Beranda</Link>
          </Button>

          <Button variant="outline" asChild className="w-full">
            <Link href="/register">Daftar Gratis</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
