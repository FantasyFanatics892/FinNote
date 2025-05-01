import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileQuestion, Home, Search } from "lucide-react"

export default function NotFoundPage() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 text-center">
      <div className="flex flex-col items-center max-w-md space-y-6">
        <div className="p-4 rounded-full bg-primary/10">
          <FileQuestion className="w-16 h-16 text-primary" />
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Halaman Tidak Ditemukan</h1>

        <p className="text-muted-foreground text-lg">
          Maaf, halaman yang Anda cari tidak dapat ditemukan atau mungkin telah dipindahkan.
        </p>

        <div className="flex items-center justify-center p-4 rounded-lg bg-muted/50 w-full">
          <Search className="w-5 h-5 mr-2 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            Periksa kembali URL atau gunakan navigasi untuk menemukan halaman yang Anda cari.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <Button asChild className="w-full">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Link>
          </Button>

          <Button variant="outline" asChild className="w-full">
            <Link href="/dashboard">Ke Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
