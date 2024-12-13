import { useState, useEffect } from 'react'

type MediaItem = {
  id: string
  type: 'image' | 'video'
  url: string
}

type MediaPreviewProps = {
  items: MediaItem[]
}

export default function MediaPreview({ items }: MediaPreviewProps) {
  const [previewItems, setPreviewItems] = useState<MediaItem[]>([])

  useEffect(() => {
    setPreviewItems(items.slice(-3))
  }, [items])

  if (previewItems.length === 0) {
    return null
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Recently Uploaded</h2>
      <div className="flex space-x-4">
        {previewItems.map((item) => (
          <div key={item.id} className="w-1/3">
            {item.type === 'image' ? (
              <img src={item.url} alt="Preview" className="w-full h-40 object-cover rounded-lg" />
            ) : (
              <video src={item.url} className="w-full h-40 object-cover rounded-lg" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

