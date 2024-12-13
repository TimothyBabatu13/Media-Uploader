'use client'

import { useState, useCallback } from 'react'
import UploadArea from './components/UploadArea'
import MediaPreview from './components/MediaPreview'
import Gallery from './components/Gallery'
import Modal from './components/Modal'

type MediaItem = {
  id: string
  type: 'image' | 'video'
  url: string
}

export default function Home() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([])
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)

  const handleUpload = useCallback((files: FileList) => {
    const newItems: MediaItem[] = Array.from(files).map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      type: file.type.startsWith('image/') ? 'image' : 'video',
      url: URL.createObjectURL(file),
    }))
    console.log(newItems)
    setMediaItems((prevItems) => [...prevItems, ...newItems])
  }, [])

  return (
    <div className="space-y-8">
      <UploadArea onUpload={handleUpload} />
      <MediaPreview items={mediaItems} />
      <Gallery items={mediaItems} onSelect={setSelectedMedia} />
      {selectedMedia && (
        <Modal
          isOpen={!!selectedMedia}
          onClose={() => setSelectedMedia(null)}
        >
          {selectedMedia.type === 'image' ? (
            <img src={selectedMedia.url} alt="Full size" className="max-w-full max-h-[80vh] object-contain" />
          ) : (
            <video src={selectedMedia.url} controls className="max-w-full max-h-[80vh]" />
          )}
        </Modal>
      )}
    </div>
  )
}

