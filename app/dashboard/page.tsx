"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowUp, Calendar, CreditCard, Plus, Wallet } from "lucide-react"
import TransactionList from "@/components/transaction-list"
import { useEffect, useState } from "react"
import { BarChart, LineChart, PieChart } from "@/components/charts"

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center gap-2">
            <Button size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              April 2025
            </Button>
            <Button size="sm" variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Tambah Transaksi
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Ringkasan</TabsTrigger>
            <TabsTrigger value="analytics">Analitik</TabsTrigger>
            <TabsTrigger value="reports">Laporan</TabsTrigger>
            <TabsTrigger value="notifications">Pengingat</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Saldo</CardTitle>
                  <Wallet className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Rp 12.500.000</div>
                  <p className="text-xs text-muted-foreground">+2% dari bulan lalu</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pemasukan</CardTitle>
                  <ArrowUp className="h-4 w-4 text-emerald-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Rp 8.350.000</div>
                  <p className="text-xs text-muted-foreground">+12% dari bulan lalu</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pengeluaran</CardTitle>
                  <ArrowDown className="h-4 w-4 text-rose-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Rp 5.240.000</div>
                  <p className="text-xs text-muted-foreground">-4% dari bulan lalu</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Tagihan Mendatang</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Rp 1.850.000</div>
                  <p className="text-xs text-muted-foreground">Jatuh tempo dalam 7 hari</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Ringkasan Keuangan</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <LineChart />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Pengeluaran Berdasarkan Kategori</CardTitle>
                </CardHeader>
                <CardContent>
                  <PieChart />
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Transaksi Terbaru</CardTitle>
                  <CardDescription>Transaksi 7 hari terakhir</CardDescription>
                </CardHeader>
                <CardContent>
                  <TransactionList />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Perbandingan Bulanan</CardTitle>
                  <CardDescription>Pemasukan vs Pengeluaran</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <BarChart />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Analitik Keuangan</CardTitle>
                <CardDescription>Analisis mendalam tentang pola keuangan Anda</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <p className="text-muted-foreground">Fitur analitik sedang dalam pengembangan</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Laporan Keuangan</CardTitle>
                <CardDescription>Laporan keuangan bulanan dan tahunan</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <p className="text-muted-foreground">Fitur laporan sedang dalam pengembangan</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pengingat Tagihan</CardTitle>
                <CardDescription>Atur pengingat untuk tagihan rutin Anda</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <p className="text-muted-foreground">Fitur pengingat sedang dalam pengembangan</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
