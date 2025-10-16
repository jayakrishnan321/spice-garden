import React from 'react'

function Header() {
  return (
    <div>
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md fixed w-full top-0 z-50">
      {/* Left side - Logo / Name */}
      <h1 className="text-2xl font-bold text-orange-600">Spice Garden</h1>

      {/* Right side - Navigation */}
      <nav>
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-orange-600 cursor-pointer">Home</li>
          <li className="hover:text-orange-600 cursor-pointer">Menu</li>
          <li className="hover:text-orange-600 cursor-pointer">About</li>
          <li className="hover:text-orange-600 cursor-pointer">Contact</li>
        </ul>
      </nav>
    </header>
    </div>
  )
}

export default Header
