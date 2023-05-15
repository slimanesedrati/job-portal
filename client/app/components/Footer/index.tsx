"use client"
import Link from "next/link"
import Logo from "../Logo"

const Footer = () => {
  return (
    <footer className="py-16 bg-veryDarkViolet">
      <div
        className="container px-6 flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
        {/* <!-- Logo --> */}
        <Link href=''><Logo light /></Link>

        {/* <!-- Menus Container --> */}
        <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
          {/* <!-- Menu 1 --> */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">Features</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Link shortening</a>
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Branded links</a>
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Analytics</a>
            </div>
          </div>

          {/* <!-- Menu 2 --> */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">Resources</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Blog</a>
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Developers</a>
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Support</a>
            </div>
          </div>

          {/* <!-- Menu 3 --> */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">Company</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">About</a>
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Our Team</a>
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Careers</a>
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Contact</a>
            </div>
          </div>
        </div>

        {/* <!-- Social Container --> */}
        <ul className="space-x-6 text-gray-light text-xs hidden md:flex">
          <li>facebook</li>
          <li>twitter</li>
          <li>github</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer