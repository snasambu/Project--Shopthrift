import Link from "next/link"
import { ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative">
      <div className="container flex flex-col items-center justify-center space-y-4 py-32 text-center md:py-36 lg:py-40">
        <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070')] bg-cover bg-center opacity-20" />
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Summer Collection 2025
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Discover our latest collection of premium products with up to 50% off.
        </p>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button asChild size="lg">
            <Link href="/products">
              Shop Now
              <ShoppingBag className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/categories">Browse Categories</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
