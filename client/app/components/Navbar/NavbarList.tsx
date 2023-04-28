'use client'

import Link from "next/link"

const NavbarList = () => {
  return (
    <div className="hidden text-sm  space-x-8 font-bold lg:flex">
        <Link href="/jobs" className="text-gray-med hover:text-black">Jobs</Link>
        <Link href="#inter" className="text-gray-med hover:text-black">Interships</Link>
        <Link href="#about" className="text-gray-med hover:text-black">About Us</Link>
    </div>
  )
}

export default NavbarList