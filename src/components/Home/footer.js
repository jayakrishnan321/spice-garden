import React from 'react'

function footer() {
  return (
    <footer className="bg-gray-900 text-white px-8 py-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">
    {/* Pages */}
    <div>
      <h3 className="font-bold mb-4">Pages</h3>
      <ul className="space-y-2">
        <li className="hover:text-orange-500 cursor-pointer">About Us</li>
        <li className="hover:text-orange-500 cursor-pointer">Locations</li>
        <li className="hover:text-orange-500 cursor-pointer">Menu</li>
        <li className="hover:text-orange-500 cursor-pointer">Services</li>
        <li className="hover:text-orange-500 cursor-pointer">Media</li>
        <li className="hover:text-orange-500 cursor-pointer">Contact Us</li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h3 className="font-bold mb-4">Services</h3>
      <ul className="space-y-2">
        <li className="hover:text-orange-500 cursor-pointer">Outdoor Catering</li>
        <li className="hover:text-orange-500 cursor-pointer">Party Halls</li>
      </ul>
    </div>

    {/* Menu */}
    <div>
      <h3 className="font-bold mb-4">Menu</h3>
      <ul className="space-y-2">
        <li className="hover:text-orange-500 cursor-pointer">South Indian Cuisine</li>
        <li className="hover:text-orange-500 cursor-pointer">North Indian Cuisine</li>
        <li className="hover:text-orange-500 cursor-pointer">Chinese Cuisine</li>
        <li className="hover:text-orange-500 cursor-pointer">Continental Cuisine</li>
        <li className="hover:text-orange-500 cursor-pointer">Chaats</li>
        <li className="hover:text-orange-500 cursor-pointer">Desserts</li>
      </ul>
    </div>

    {/* Locations */}
    <div className="overflow-y-auto max-h-48">
      <h3 className="font-bold mb-4">Locations</h3>
      <ul className="space-y-2">
        <li className="hover:text-orange-500 cursor-pointer">Payyanur</li>
        <li className="hover:text-orange-500 cursor-pointer">Kannur</li>
        <li className="hover:text-orange-500 cursor-pointer">Kozhikode</li>
        <li className="hover:text-orange-500 cursor-pointer">kochi</li>
        <li className="hover:text-orange-500 cursor-pointer">manglore</li>
        <li className="hover:text-orange-500 cursor-pointer">chennai</li>
        <li className="hover:text-orange-500 cursor-pointer">kundalahalli</li>
        <li className="hover:text-orange-500 cursor-pointer">Uttarahalli</li>
      </ul>
    </div>

    {/* Follow Us */}
    <div>
      <h3 className="font-bold mb-4">Follow Us</h3>
      <div className="flex space-x-4 text-2xl">
        <i className="fab fa-youtube cursor-pointer hover:text-red-600"></i>
        <i className="fab fa-facebook cursor-pointer hover:text-blue-600"></i>
        <i className="fab fa-instagram cursor-pointer hover:text-pink-500"></i>
        <i className="fab fa-x cursor-pointer hover:text-gray-400"></i>
      </div>

      <h3 className="font-bold mt-6 mb-2">Legal</h3>
      <ul className="space-y-2">
        <li className="hover:text-orange-500 cursor-pointer">Cookie Policy</li>
        <li className="hover:text-orange-500 cursor-pointer">Privacy Policy</li>
        <li className="hover:text-orange-500 cursor-pointer">Terms & Conditions</li>
      </ul>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="mt-12 border-t border-gray-700 pt-4 text-sm flex justify-between items-center">
    <p>spice Garden 2025 All rights reserved.</p>
    <p>Maintained by <span className="font-semibold">Odigma</span></p>
  </div>
</footer>

  )
}

export default footer
