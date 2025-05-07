import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Heart, Minus, Plus, ShoppingCart, Star, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample product database
const productDatabase = [
  {
    id: 1,
    name: "Leather Backpack",
    price: 129.99,
    description:
      "This premium leather backpack is crafted with the finest materials to ensure durability and style. Perfect for everyday use, this versatile bag combines fashion and functionality.",
    features: [
      "Genuine leather construction",
      "Adjustable shoulder straps",
      "Multiple compartments",
      "Laptop sleeve fits up to 15-inch devices",
      "Water-resistant finish",
    ],
    specifications: {
      Material: "Full-grain leather",
      Dimensions: "16 x 12 x 6 inches",
      Weight: "2.3 lbs",
      Color: "Vintage Brown",
      Warranty: "2 year limited",
    },
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1469&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622560481156-01fc7e1693e6?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622560480754-d9c365c0d97f?q=80&w=1374&auto=format&fit=crop",
    ],
    category: "Accessories",
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 89.99,
    description:
      "Experience premium sound quality with our wireless headphones. Featuring active noise cancellation and long battery life, these headphones are perfect for music lovers on the go.",
    features: [
      "Active noise cancellation",
      "40-hour battery life",
      "Bluetooth 5.0 connectivity",
      "Comfortable over-ear design",
      "Built-in microphone for calls",
    ],
    specifications: {
      Material: "Premium plastic and leather",
      Battery: "1000mAh rechargeable",
      Range: "Up to 30 feet",
      Color: "Matte Black",
      Warranty: "1 year limited",
    },
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1465&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1468&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?q=80&w=1470&auto=format&fit=crop",
    ],
    category: "Electronics",
    rating: 4.5,
    reviewCount: 203,
    inStock: true,
  },
  // Add more products as needed
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = Number.parseInt(params.id)

  // Find the product in our database, or use a default if not found
  const product = productDatabase.find((p) => p.id === productId) || {
    id: productId,
    name: `Premium Product ${params.id}`,
    price: 99.99,
    description:
      "This premium product is crafted with the finest materials to ensure durability and comfort. Perfect for everyday use, this versatile item combines style and functionality.",
    features: [
      "Premium quality materials",
      "Durable construction",
      "Comfortable design",
      "Versatile functionality",
      "Modern aesthetic",
    ],
    specifications: {
      Material: "Premium cotton blend",
      Dimensions: "12 x 8 x 4 inches",
      Weight: "1.2 lbs",
      Color: "Midnight Black",
      Warranty: "1 year limited",
    },
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1528&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=1512&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600003263720-95b45a4035d5?q=80&w=1470&auto=format&fit=crop",
    ],
    category: "Premium Collection",
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-foreground">
              Products
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{product.name}</span>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg border">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      width={150}
                      height={150}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : i < product.rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <div>
                <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
                <p className="mt-1 text-sm text-muted-foreground">Free shipping on orders over $50</p>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium">Description</h3>
                <p className="mt-2 text-muted-foreground">{product.description}</p>
              </div>

              <div>
                <h3 className="font-medium">Features</h3>

                <ul className="mt-2 space-y-1 text-muted-foreground">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Button variant="outline" size="icon" className="rounded-r-none">
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <div className="flex h-10 w-12 items-center justify-center border-y">1</div>
                  <Button variant="outline" size="icon" className="rounded-l-none">
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                </div>

                <Button className="flex-1">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>

                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Add to wishlist</span>
                </Button>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium">Free Shipping</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Free standard shipping on orders over $50. Delivery time: 3-5 business days.
                </p>
              </div>
            </div>
          </div>

          <Tabs defaultValue="description" className="mt-12">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="py-4">
              <div className="space-y-4">
                <p>{product.description}</p>
                <p>
                  Our products are designed with sustainability in mind, using eco-friendly materials and production
                  methods whenever possible. We believe in creating products that not only look good but also feel good
                  to use and are kind to our planet.
                </p>
                <p>
                  Each item undergoes rigorous quality testing to ensure it meets our high standards before it reaches
                  your hands. We stand behind our products with confidence, offering a satisfaction guarantee on all
                  purchases.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="py-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b pb-2">
                    <span className="font-medium">{key}</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="py-4">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold">{product.rating}</div>
                  <div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : i < product.rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">Based on {product.reviewCount} reviews</p>
                  </div>
                </div>
                <Separator />
                <p className="text-center text-muted-foreground">Customer reviews will appear here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
