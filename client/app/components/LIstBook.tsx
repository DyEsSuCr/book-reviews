import { type ListBook } from '@/interfaces/book.interface'
import Image from 'next/image'

export async function fetchBooks () {
  const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=title=hola&maxResult=5')
  const books: ListBook = await res.json()
  return books
}

export async function ListBooks () {
  const books = await fetchBooks()

  return (
    <div className='grid grid-cols-3'>
      {books.items.map(book => (
        <figure key={book.id}>
          <h2 className='text-yellow-700'>{book.volumeInfo.title}</h2>
          <Image width={200} height={200} src={book.volumeInfo.imageLinks?.thumbnail ?? 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'} alt={book.volumeInfo.title} />
          <p>{book.volumeInfo.description?.split('.')[0]}</p>
          <a href={book.selfLink} target='_blank' rel='noreferer noreferrer' className='text-red-600'>Mas info</a>
        </figure>
      ))}
    </div>
  )
}
