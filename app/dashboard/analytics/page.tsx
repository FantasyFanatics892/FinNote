"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ComingSoon from "@/components/coming-soon"
import { useRouter } from "next/navigation"

export default function AnalyticsPage() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Analitik</h2>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Analitik Keuangan</CardTitle>
            <CardDescription>Analisis mendalam tentang pola keuangan Anda</CardDescription>
          </CardHeader>
          <CardContent>
            <ComingSoon showBackButton onBack={() => router.push("/dashboard")} backButtonText="Kembali ke Dashboard" />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
