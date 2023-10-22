import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className='header-container'>
      <div className="brand-container">
          <Link href='/'>
            <img className="logo" src={'/logo.png'} alt="Logo" />
          </Link>
          <Link href='/'>          
            <h1>Streamlining</h1>
          </Link>
      </div>
      <div style={{marginRight:'1rem'}}>
          <Link href='/blog'>                      
            <h2>Blog</h2>
          </Link>
      </div>
    </div>
  )
}
