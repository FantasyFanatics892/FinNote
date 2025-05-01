import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Calendar,
  CreditCard,
  PieChart,
} from "lucide-react";
import FeatureCard from "@/components/feature-card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Kelola Keuangan Pribadi
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  FinNote membantu Anda melacak, menganalisis, dan merencanakan
                  keuangan pribadi dengan antarmuka yang simpel dan modern.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Mulai Sekarang
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#features">
                  <Button size="lg" variant="outline">
                    Lihat Fitur
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-square">
                <Image
                  src="/logo.png"
                  alt="FinNote Logo Preview"
                  width={500}
                  height={500}
                  className="rounded-xl shadow-xl dark:shadow-primary/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Fitur Utama
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nikmati berbagai fitur yang dirancang untuk memudahkan
                pengelolaan keuangan Anda
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <FeatureCard
              icon={<CreditCard className="h-10 w-10" />}
              title="Catatan Transaksi"
              description="Catat semua transaksi keuangan Anda dengan mudah dan cepat"
            />
            <FeatureCard
              icon={<Calendar className="h-10 w-10" />}
              title="Riwayat Transaksi"
              description="Lihat dan filter riwayat transaksi Anda berdasarkan kategori dan tanggal"
            />
            <FeatureCard
              icon={<PieChart className="h-10 w-10" />}
              title="Laporan Keuangan"
              description="Dapatkan laporan keuangan yang komprehensif dalam bentuk grafik dan tabel"
            />
            <FeatureCard
              icon={<Bell className="h-10 w-10" />}
              title="Pengingat Tagihan"
              description="Atur pengingat untuk tagihan rutin agar tidak pernah terlewat"
            />
            <FeatureCard
              icon={<BarChart3 className="h-10 w-10" />}
              title="Dashboard"
              description="Lihat ringkasan keuangan Anda dalam satu tampilan yang informatif"
            />
            <FeatureCard
              icon={<ArrowRight className="h-10 w-10" />}
              title="Dan Masih Banyak Lagi"
              description="Terus dikembangkan dengan fitur-fitur baru yang bermanfaat"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Siap Mengelola Keuangan Anda?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Gitu aja sih...
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Daftar Sekarang
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline">
                  Masuk
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center space-x-2">
              <span className="font-bold">FinNote</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 ZoraLucas. Semua hak dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
