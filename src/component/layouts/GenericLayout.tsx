import React from 'react'
import Navbar from '../ui/navbar/navbar'

export default function GenericLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='bg-black relative h-screen w-screen text-white'>
      <Navbar />
      <section className='p-1 flex'>
        {children}
      </section>
    </main>
  )
}
