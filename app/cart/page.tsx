import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Input } from "@/components/ui/input"

export default function CartPage() {
  // This would typically come from a cart state or API
  const cartItems = [
    {
      id: 1,
      name: "Leather Backpack",
      price: 129.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1469&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: 89.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop",
    },
  ]

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 0 // Free shipping
  const total = subtotal + shipping

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
            <span className="text-foreground">Shopping Cart</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight">Shopping Cart</h1>

          {cartItems.length > 0 ? (
            <div className="mt-8 grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="rounded-lg border">
                  {cartItems.map((item, index) => (
                    <div key={item.id}>
                      <div className="flex flex-col p-4 sm:flex-row sm:items-center">
                        <div className="flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={100}
                            height={100}
                            className="h-24 w-24 rounded-md object-cover"
                          />
                        </div>
                        <div className="mt-4 flex-1 sm:mt-0 sm:ml-6">
                          <div className="flex justify-between">
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">${item.price.toFixed(2)} each</p>
                          <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center">
                              <Button variant="outline" size="icon" className="h-8 w-8 rounded-r-none">
                                <Minus className="h-3 w-3" />
                                <span className="sr-only">Decrease quantity</span>
                              </Button>
                              <div className="flex h-8 w-10 items-center justify-center border-y text-sm">
                                {item.quantity}
                              </div>
                              <Button variant="outline" size="icon" className="h-8 w-8 rounded-l-none">
                                <Plus className="h-3 w-3" />
                                <span className="sr-only">Increase quantity</span>
                              </Button>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 text-muted-foreground">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                      {index < cartItems.length - 1 && <Separator />}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="rounded-lg border p-6">
                  <h3 className="text-lg font-medium">Order Summary</h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  <Button className="mt-6 w-full" asChild>
                    <Link href="/checkout">Proceed to Checkout</Link>
                  </Button>
                  <div className="mt-4">
                    <div className="flex items-center gap-2">
                      <Input placeholder="Discount code" className="flex-1" />
                      <Button variant="outline">Apply</Button>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-12 flex flex-col items-center justify-center space-y-4 text-center">
              <div className="rounded-full bg-muted p-6">
                <ShoppingBag className="h-10 w-10 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold">Your cart is empty</h2>
              <p className="text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
              <Button asChild className="mt-4">
                <Link href="/products">Start Shopping</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
