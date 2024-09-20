'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { HardDrive } from "lucide-react"
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          <Link className="flex items-center justify-center" href="#">
          <HardDrive className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-bold">Web3Miner</span>
        </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary">Features</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">Pricing</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Dashboard</Link></li>

            </ul>
          </nav>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-4 bg-background">
            <ul className="space-y-2">
              <li><Link href="/" className="block px-3 py-2 rounded-md text-base text-muted-foreground hover:text-primary hover:bg-accent">Home</Link></li>
              <li><Link href="/about" className="block px-3 py-2 rounded-md text-base text-muted-foreground hover:text-primary hover:bg-accent">About</Link></li>
              <li><Link href="/services" className="block px-3 py-2 rounded-md text-base text-muted-foreground hover:text-primary hover:bg-accent">Services</Link></li>
              <li><Link href="/contact" className="block px-3 py-2 rounded-md text-base text-muted-foreground hover:text-primary hover:bg-accent">Contact</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}