import Link from "next/link"
import { ArrowLeft, Download, Smartphone } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function InstallPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-8">
          <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="text-3xl font-bold tracking-tight">Install SHOPTHRIFT App</h1>
          <p className="mt-2 text-muted-foreground">
            Get a better shopping experience by installing our app on your device.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">iOS Installation</h2>
              <ol className="mt-4 space-y-3 text-muted-foreground">
                <li>1. Open SHOPTHRIFT in Safari</li>
                <li>2. Tap the Share button</li>
                <li>3. Scroll down and tap "Add to Home Screen"</li>
                <li>4. Tap "Add" in the top-right corner</li>
              </ol>
            </div>

            <div className="rounded-lg border p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">Android Installation</h2>
              <ol className="mt-4 space-y-3 text-muted-foreground">
                <li>1. Open SHOPTHRIFT in Chrome</li>
                <li>2. Tap the menu button (three dots)</li>
                <li>3. Tap "Install app" or "Add to Home screen"</li>
                <li>4. Follow the on-screen instructions</li>
              </ol>
            </div>

            <div className="rounded-lg border p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Download className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">Desktop Installation</h2>
              <ol className="mt-4 space-y-3 text-muted-foreground">
                <li>1. Open SHOPTHRIFT in Chrome, Edge, or Firefox</li>
                <li>2. Look for the install icon in the address bar</li>
                <li>3. Click the install button</li>
                <li>4. Click "Install" in the prompt</li>
              </ol>
            </div>
          </div>

          <div className="mt-12 rounded-lg bg-muted p-6 text-center">
            <h2 className="text-2xl font-semibold">Why Install Our App?</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="font-medium">Faster Shopping</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Enjoy a faster, app-like experience without the need to open your browser.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Offline Access</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Browse products even when you have a poor internet connection.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Easy Access</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Access SHOPTHRIFT directly from your home screen with just one tap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
