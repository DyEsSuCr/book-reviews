'use client'

import { type FormEvent } from 'react'

export function FormSignup () {
  interface Book {
    id: string
    title: string
    author: string
  }

  const handleSubmid = async (e: FormEvent<HTMLFormElement>): Promise<Book[]> => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const username = formData.get('username')
    const email = formData.get('email')
    const password = formData.get('password')

    console.log({ ...formData })

    const response = await fetch('http://localhost:5173/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    })

    return [
      {
        author: 'asd',
        id: 'asd',
        title: 'asd'
      }
    ]
  }

  return (
    <form onSubmit={handleSubmid}>
      <input type="text" name="username" />
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button>Registrarse</button>
    </form>
  )
}
