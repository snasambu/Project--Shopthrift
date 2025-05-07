import { Filter, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProductCard } from "@/components/product-card"

export default function ProductsPage() {
  // This would typically come from a database or API
  const products = [
    {
      id: 1,
      name: "Leather Backpack",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1469&auto=format&fit=crop",
      category: "Accessories",
      isNew: true,
      isSale: false,
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop",
      category: "Electronics",
      isNew: false,
      isSale: true,
    },
    {
      id: 3,
      name: "Cotton T-Shirt",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop",
      category: "Clothing",
      isNew: false,
      isSale: false,
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 199.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop",
      category: "Electronics",
      isNew: true,
      isSale: true,
    },
    {
      id: 5,
      name: "Denim Jacket",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1470&auto=format&fit=crop",
      category: "Clothing",
      isNew: false,
      isSale: false,
    },
    {
      id: 6,
      name: "Running Shoes",
      price: 119.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop",
      category: "Footwear",
      isNew: true,
      isSale: false,
    },
    {
      id: 7,
      name: "Sunglasses",
      price: 59.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1480&auto=format&fit=crop",
      category: "Accessories",
      isNew: false,
      isSale: true,
    },
    {
      id: 8,
      name: "Smartphone",
      price: 699.99,
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1527&auto=format&fit=crop",
      category: "Electronics",
      isNew: true,
      isSale: false,
    },
    {
      id: 9,
      name: "Scented Candle",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1374&auto=format&fit=crop",
      category: "Home & Living",
      isNew: false,
      isSale: false,
    },
    {
      id: 10,
      name: "Ceramic Mug",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=1470&auto=format&fit=crop",
      category: "Home & Living",
      isNew: false,
      isSale: false,
    },
    {
      id: 11,
      name: "Leather Wallet",
      price: 49.99,
      originalPrice: 69.99,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1374&auto=format&fit=crop",
      category: "Accessories",
      isNew: false,
      isSale: true,
    },
    {
      id: 12,
      name: "Fitness Tracker",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=1476&auto=format&fit=crop",
      category: "Electronics",
      isNew: true,
      isSale: false,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Products</h1>
              <p className="text-muted-foreground">Browse our collection of premium products.</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Sort
              </Button>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button variant="outline">Load More</Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
