'use client'

import Link from "next/link"
import Button from "../Button"

const NavbarMobileMenu = () => {
  return (
    <div id="menu" className="absolute overflow-hidden z-40 p-6 rounded-lg bg-gray-dark left-6 right-6 top-20 z-100">
          <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
            <Link href="/jobs?offerType=1" className="w-full text-center">Jobs</Link>
            <Link href="/jobs?offerType=2" className="w-full text-center">Interships</Link>
            <Link href="/auth/company/register" className="w-full text-center">Company | Post jobs</Link>

            <Button asLink url="auth/login" className="bg-transparent text-gray-med">Login</Button>
            <Button asLink url="auth/register" className="text-white rounded-full">Signup</Button>            
          </div>
    </div>
  )
}

export default NavbarMobileMenu