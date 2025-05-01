"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isLoggedIn = pathname.startsWith("/dashboard")

  const navItems = [
    { name: "Beranda", href: "/" },
    { name: "Fitur", href: "/#features" },
    { name: "Harga", href: "/pricing" },
    { name: "Bantuan", href: "/help" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block text-xl">FinNote</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <div className="hidden md:flex gap-2">
            {!isLoggedIn ? (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    Masuk
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm">Daftar</Button>
                </Link>
              </>
            ) : (
              <Link href="/dashboard">
                <Button size="sm">Dashboard</Button>
              </Link>
            )}
          </div>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  {!isLoggedIn ? (
                    <>
                      <Link href="/login" onClick={() => setOpen(false)}>
                        <Button variant="outline" className="w-full">
                          Masuk
                        </Button>
                      </Link>
                      <Link href="/register" onClick={() => setOpen(false)}>
                        <Button className="w-full">Daftar</Button>
                      </Link>
                    </>
                  ) : (
                    <Link href="/dashboard" onClick={() => setOpen(false)}>
                      <Button className="w-full">Dashboard</Button>
                    </Link>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
