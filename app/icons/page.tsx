// This is a placeholder page to generate icons
// In a real app, you would create proper icons with your brand
export default function IconsPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-4">App Icons</h1>
      <p>These are the app icons used for the PWA installation.</p>

      <div className="grid grid-cols-2 gap-8 mt-8">
        <div className="border p-4 rounded-lg">
          <div className="bg-black text-white w-[192px] h-[192px] flex items-center justify-center text-2xl font-bold">
            SHOPTHRIFT
          </div>
          <p className="mt-2 text-sm text-muted-foreground">192x192 icon</p>
        </div>

        <div className="border p-4 rounded-lg">
          <div className="bg-black text-white w-[512px] h-[512px] flex items-center justify-center text-4xl font-bold">
            SHOPTHRIFT
          </div>
          <p className="mt-2 text-sm text-muted-foreground">512x512 icon</p>
        </div>
      </div>
    </div>
  )
}
