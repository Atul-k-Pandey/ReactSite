import React from 'react'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";


function Footer() {
  return (
    <div>
       <footer className="bg-[#35575B] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            {/* Logo */}
            <div className="text-3xl">👨‍🍳</div>
            <div>
              <h2 className="text-xl font-bold">
                <span className="text-orange-400">Tasty</span>{" "}
                <span className="text-yellow-300">Food</span>
              </h2>
              <p className="text-xs tracking-wide text-gray-300">
                HEALTHY FOOD
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-4 text-sm text-gray-200">
            <a href="#" className="hover:text-orange-300">Menu</a>
            <a href="#" className="hover:text-orange-300">Our Story</a>
            <a href="#" className="hover:text-orange-300">Location</a>
            <a href="#" className="hover:text-orange-300">Gift Card</a>
          </nav>
        </div>

        {/* Center Section */}
        <div className="text-sm text-gray-200 space-y-3">
          <p>76 Noida, Uttar Pradesh, 201304, India</p>
          <p>Email: <span className="text-white">info@tastyfood.com</span></p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start md:items-end gap-4">
          <div className="flex gap-3">
            <button className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded-full text-sm hover:bg-yellow-400 hover:text-black transition">
              Order online
            </button>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm hover:bg-yellow-500 transition">
              Book a table
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-2">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-400" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-400" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-blue-300" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-sky-400" />
            <Youtube className="w-5 h-5 cursor-pointer hover:text-red-500" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-4 text-center text-sm text-gray-300">
        ©2025 Brand, Inc. · Privacy · Terms · Sitemap
      </div>
    </footer>
    </div>
  )
}

export default Footer
