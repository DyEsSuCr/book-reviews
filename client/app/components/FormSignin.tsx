'use client'

import { type FormEvent } from 'react'

export function FormSignin () {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const email = formData.get('email')
    const password = formData.get('password')

    console.log({ ...formData })

    const response = await fetch('http://localhost:5173/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='email' name='email' />
      <input type='password' name='password' />
      <button>Iniciar</button>
    </form>
  )
}
