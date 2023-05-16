'use client'

import Link from "next/link"
import { useAuthStore } from "@/store/store";

const NavbarList = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return (
    <div className="hidden text-sm  space-x-8 font-bold lg:flex">
        <Link href="/jobs?offerType=1" className="text-gray-med hover:text-black">Jobs</Link>
        <Link href="/jobs?offerType=2" className="text-gray-med hover:text-black">Interships</Link>
        {!isAuthenticated&&
          <Link href="/auth/company/register" className="text-gray-med hover:text-black">Company | Post jobs</Link>
        }
    </div>
  )
}

export default NavbarList