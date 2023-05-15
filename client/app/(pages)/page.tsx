'use client'
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import toast, { Toaster } from "react-hot-toast"
import { HomeHerro, HomeHowToUse } from "../components"

const Home = () => {
  const searchParams = useSearchParams()

  useEffect(()=> {
      if (searchParams.get('success') === 'login') {
          const message: string = "Welcome back!"
          toast.success(message);
      }else if (searchParams.get('success') === 'logout') {
          const message: string = "Loged out, Thank you."
          toast.success(message);
      }
  }, [])

  return (
    <div className="w-full h-full bg-light">
      <Toaster />
      <HomeHerro />
      <HomeHowToUse />
    </div>
  )
}

export default Home