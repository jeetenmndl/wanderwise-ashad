import React from 'react'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className="flex items-center justify-between border border-purple-200 py-4 px-20">
        {/* left part  */}
        <div>
            <h1 className='text-4xl font-semibold text-purple-700'>Wanderwise</h1>
        </div>

        {/* right part  */}
        <div className='flex items-center gap-16'>
            <nav className='space-x-10 text-lg font-medium [&>a]:hover:text-purple-600'>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>

            <CustomButton text="Log in" link="/login" />
        </div>
    </header>
  )
}

export default Navbar