"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"

export function InstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    const handleBeforeInstallPrompt = (e: any) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault()
      // Stash the event so it can be triggered later
      setDeferredPrompt(e)
      // Update UI to notify the user they can install the PWA
      setShowPrompt(true)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstallClick = () => {
    if (!deferredPrompt) return

    // Show the install prompt
    deferredPrompt.prompt()

    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt")
      } else {
        console.log("User dismissed the install prompt")
      }
      // We no longer need the prompt. Clear it up.
      setDeferredPrompt(null)
      setShowPrompt(false)
    })
  }

  if (!showPrompt) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 flex items-center justify-between z-50">
      <div>
        <h3 className="font-medium">Install SHOPTHRIFT App</h3>
        <p className="text-sm text-muted-foreground">Get a better shopping experience</p>
      </div>
      <div className="flex items-center gap-2">
        <Button onClick={handleInstallClick}>Install</Button>
        <Button variant="ghost" size="icon" onClick={() => setShowPrompt(false)}>
          <X className="h-4 w-4" />
          <span className="sr-only">Dismiss</span>
        </Button>
      </div>
    </div>
  )
}
