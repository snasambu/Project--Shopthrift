import { NextResponse } from "next/server"
import { put } from "@vercel/blob"

export async function GET() {
  try {
    // Create a simple canvas for the 192x192 icon
    const canvas192 = new OffscreenCanvas(192, 192)
    const ctx192 = canvas192.getContext("2d")

    if (!ctx192) {
      return NextResponse.json({ error: "Failed to get canvas context" }, { status: 500 })
    }

    // Draw a black background
    ctx192.fillStyle = "#000000"
    ctx192.fillRect(0, 0, 192, 192)

    // Add text
    ctx192.fillStyle = "#FFFFFF"
    ctx192.font = "bold 24px Arial"
    ctx192.textAlign = "center"
    ctx192.textBaseline = "middle"
    ctx192.fillText("SHOPTHRIFT", 96, 96)

    // Convert to blob
    const blob192 = await canvas192.convertToBlob({ type: "image/png" })

    // Create a simple canvas for the 512x512 icon
    const canvas512 = new OffscreenCanvas(512, 512)
    const ctx512 = canvas512.getContext("2d")

    if (!ctx512) {
      return NextResponse.json({ error: "Failed to get canvas context" }, { status: 500 })
    }

    // Draw a black background
    ctx512.fillStyle = "#000000"
    ctx512.fillRect(0, 0, 512, 512)

    // Add text
    ctx512.fillStyle = "#FFFFFF"
    ctx512.font = "bold 48px Arial"
    ctx512.textAlign = "center"
    ctx512.textBaseline = "middle"
    ctx512.fillText("SHOPTHRIFT", 256, 256)

    // Convert to blob
    const blob512 = await canvas512.convertToBlob({ type: "image/png" })

    // Upload to Vercel Blob
    const icon192 = await put("icons/icon-192x192.png", blob192, { access: "public" })
    const icon512 = await put("icons/icon-512x512.png", blob512, { access: "public" })

    return NextResponse.json({
      success: true,
      icons: {
        icon192: icon192.url,
        icon512: icon512.url,
      },
    })
  } catch (error) {
    console.error("Error generating icons:", error)
    return NextResponse.json({ error: "Failed to generate icons" }, { status: 500 })
  }
}
