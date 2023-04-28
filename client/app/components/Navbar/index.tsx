'use client'
import { useState } from "react"
import { Button, Logo }from ".."
import NavbarList from "./NavbarList"
import NavbarMenuButton from "./NavbarMenuButton"
import NavbarMobileMenu from "./NavbarMobileMenu"
import Link from "next/link"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sticky top-0 bg-white shadow-sm z-40">
      <nav className="relative container mx-auto p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-20">
            <Link href='/'>
              <Logo />
            </Link>
            <NavbarList />
          </div>

          <div className="hidden items-center text-sm font-bold text-mediumGray lg:flex">
            <Button asLink url="auth/login" className="bg-transparent text-gray-med">Login</Button>
            <Button asLink url="auth/register" className="text-white rounded-full">Signup</Button>
          </div>

          <NavbarMenuButton isOpen setIsOpen={setIsOpen} />
          
        </div>
        {isOpen&&(
          <NavbarMobileMenu />
        )}

      </nav>
    </div>
  )
}

export default Navbar