import React from 'react'

function Header() {
  return (
    <div>
  <header className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-orange-400 via-orange-500 to-pink-500 shadow-md fixed w-full top-0 z-50">
  {/* Left side - Logo / Name */}
  <h1 className="text-2xl font-bold text-white">Spice Garden</h1>

  {/* Right side - Navigation */}
  <nav>
    <ul className="flex space-x-8 text-white font-medium">
      <li className="hover:text-yellow-200 cursor-pointer transition-colors duration-300">Home</li>
      <li className="hover:text-yellow-200 cursor-pointer transition-colors duration-300">Menu</li>
      <li className="hover:text-yellow-200 cursor-pointer transition-colors duration-300">About</li>
      <li className="hover:text-yellow-200 cursor-pointer transition-colors duration-300">Contact</li>
    </ul>
  </nav>
</header>

    </div>
  )
}

export default Header
