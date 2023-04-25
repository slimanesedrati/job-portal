'use client'
const NavbarMobileMenu = () => {
  return (
    <div id="menu" className="absolute overflow-hidden z-40 p-6 rounded-lg bg-gray-dark left-6 right-6 top-20 z-100">
          <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
            <a href="#" className="w-full text-center">Jobs</a>
            <a href="#" className="w-full text-center">Interships</a>
            <a href="#" className="w-full text-center">About Us</a>
            <a href="#" className="w-full pt-6 border-t cursor-pointer border-gray-med text-center">Login</a>
            <a href="#" className="w-full py-3 text-center rounded-full bg-primary">Sign Up</a>
          </div>
    </div>
  )
}

export default NavbarMobileMenu