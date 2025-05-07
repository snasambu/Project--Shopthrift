import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
]

export function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden group">
          <Link href={`/products/${product.id}`} className="relative block overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={400}
                height={400}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              {product.isNew && <Badge className="bg-black text-white hover:bg-black/90">New</Badge>}
              {product.isSale && <Badge className="bg-red-500 text-white hover:bg-red-600">Sale</Badge>}
            </div>
          </Link>
          <CardContent className="p-4">
            <div className="text-sm text-muted-foreground">{product.category}</div>
            <Link href={`/products/${product.id}`} className="block">
              <h3 className="mt-1 font-medium">{product.name}</h3>
            </Link>
            <div className="mt-1 flex items-center gap-2">
              <span className="font-medium">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex gap-2">
            <Button size="sm" className="w-full">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            <Button size="icon" variant="outline">
              <Heart className="h-4 w-4" />
              <span className="sr-only">Add to wishlist</span>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
