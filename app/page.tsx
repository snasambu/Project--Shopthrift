import Link from "next/link"
import { ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FeaturedProducts } from "@/components/featured-products"
import { HeroSection } from "@/components/hero-section"
import { ProductCategories } from "@/components/product-categories"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Products</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Check out our latest collection of premium products.
            </p>
          </div>
          <FeaturedProducts />
        </section>
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Shop by Category</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Browse our wide selection of products by category.
            </p>
          </div>
          <ProductCategories />
        </section>
        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Free Shipping</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Enjoy free shipping on all orders over $50.
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link href="/products">
                Shop Now
                <ShoppingBag className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
