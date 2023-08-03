interface ImageLinks {
  thumbnail: string
}

interface VolumeInfo {
  title: string
  description: string
  imageLinks: ImageLinks
}

interface Book {
  id: string
  selfLink: string
  volumeInfo: VolumeInfo
}

export interface ListBook {
  items: Book[]
}
