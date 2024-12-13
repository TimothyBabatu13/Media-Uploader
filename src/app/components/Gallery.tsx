type MediaItem = {
    id: string
    type: 'image' | 'video'
    url: string
  }
  
  type GalleryProps = {
    items: MediaItem[]
    onSelect: (item: MediaItem) => void
  }
  
  export default function Gallery({ items, onSelect }: GalleryProps) {
    if (items.length === 0) {
      return null
    }
  
    return (
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer"
              onClick={() => onSelect(item)}
            >
              {item.type === 'image' ? (
                <img src={item.url} alt="Gallery item" className="w-full h-40 object-cover rounded-lg" />
              ) : (
                <video src={item.url} className="w-full h-40 object-cover rounded-lg" />
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  