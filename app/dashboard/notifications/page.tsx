"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ComingSoon from "@/components/coming-soon"
import { useRouter } from "next/navigation"

export default function NotificationsPage() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Pengingat</h2>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Pengingat Tagihan</CardTitle>
            <CardDescription>Atur pengingat untuk tagihan rutin Anda</CardDescription>
          </CardHeader>
          <CardContent>
            <ComingSoon
              title="Pengingat Dalam Pengembangan"
              description="Fitur pengingat tagihan sedang dalam proses pengembangan dan akan segera tersedia."
              showBackButton
              onBack={() => router.push("/dashboard")}
              backButtonText="Kembali ke Dashboard"
            />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
