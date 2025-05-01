"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Mail } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Lupa Password</CardTitle>
          <CardDescription>
            {isSubmitted
              ? "Silakan periksa email Anda untuk instruksi reset password"
              : "Masukkan email Anda untuk menerima instruksi reset password"}
          </CardDescription>
        </CardHeader>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nama@contoh.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Mengirim..." : "Kirim Instruksi Reset"}
              </Button>
              <div className="text-center text-sm">
                <Link href="/login" className="flex items-center justify-center text-primary hover:underline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Kembali ke halaman login
                </Link>
              </div>
            </CardFooter>
          </form>
        ) : (
          <CardContent className="space-y-4">
            <div className="flex flex-col items-center justify-center p-6 space-y-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="w-10 h-10 text-primary" />
              </div>
              <p className="text-center text-muted-foreground">
                Kami telah mengirimkan email ke <strong>{email}</strong> dengan instruksi untuk reset password Anda.
              </p>
              <p className="text-center text-sm text-muted-foreground">
                Jika Anda tidak menerima email dalam beberapa menit, periksa folder spam Anda atau coba lagi.
              </p>
            </div>
            <Button asChild variant="outline" className="w-full">
              <Link href="/login">Kembali ke Login</Link>
            </Button>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
