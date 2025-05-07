import Link from "next/link"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    id: 1,
    name: "Clothing",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1470&auto=format&fit=crop",
    count: 42,
  },
  {
    id: 2,
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1401&auto=format&fit=crop",
    count: 38,
  },
  {
    id: 3,
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1335&auto=format&fit=crop",
    count: 56,
  },
  {
    id: 4,
    name: "Home & Living",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1287&auto=format&fit=crop",
    count: 29,
  },
]

export function ProductCategories() {
  return (
    <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((category) => (
        <Link key={category.id} href={`/categories/${category.id}`}>
          <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
            <div className="aspect-square overflow-hidden">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={300}
                height={300}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-4 text-center">
              <h3 className="font-medium">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.count} products</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
