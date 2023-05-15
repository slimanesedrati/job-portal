'use client'
import { useState } from "react"
import { Button, Logo }from ".."
import NavbarList from "./NavbarList"
import NavbarMenuButton from "./NavbarMenuButton"
import NavbarMobileMenu from "./NavbarMobileMenu"
import Link from "next/link"
import { useAuthStore } from "@/store/store"
import { useRouter } from "next/navigation"


const Navbar = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);
  const removeToken = useAuthStore((state) => state.removeToken);
  const handleLogout = () => {
    removeToken()
    router.push('/?success=logout')
  }
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
            {!isAuthenticated?(
              <>
                <Button asLink url="auth/login" className="bg-transparent text-gray-med">Login</Button>
                <Button asLink url="auth/register" className="text-white rounded-full">Signup</Button>
              </>
            ):(
              <Button onClick={handleLogout} className="bg-transparent rounded-full">Logout</Button>
            )}
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