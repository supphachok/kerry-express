import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="fixed top-0 z-20 w-full backdrop-blur transition-colors">
      <div className="flex items-center justify-between px-6 py-6 xl:px-24">
        <Link to="/" className="uppercase text-white text-2xl">
          Best Books
        </Link>
      </div>
    </header>
  )
}

export default Header
