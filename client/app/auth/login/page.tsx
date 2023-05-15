'use client'
import { Button, InputField, Logo } from "@/app/components"
import Link from "next/link"
import { SlArrowLeft } from 'react-icons/sl'
// import useSWR from 'swr'
import  { useEffect, useRef, useState } from 'react'
import { useRouter, useSearchParams } from "next/navigation"
import toast, { Toaster } from "react-hot-toast"
import { getToken } from "@/app/utils"
import { useAuthStore } from "@/store/store"


const Login = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    useEffect(()=> {
        if (searchParams.get('success') === 'registration') {
            const message: string = "Successfully registred."
            toast.success(message);
        }
    }, [])

    const storeToken = useAuthStore((state) => state.storeToken)
    const formRef = useRef<HTMLFormElement>(null)
    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = new FormData(formRef.current ?? undefined);

        const response = await getToken(data)

        if (response instanceof Error) {
            console.log(response.response?.data)
            toast.error("This didn't work.")
        }else {
            // handle login process...
            let token:string = response.data?.token
            storeToken(token)
            router.push('/?success=login')
        }
    }
    return (
        <div className="min-h-screen flex p-10 pt-20 md:p-0 bg-white md:bg-light ">
            <Toaster />
            <div className="container flex justify-center md:items-center  mx-auto">
                <div className="md:p-8 md:border border-gray-200 bg-white w-full md:max-w-lg rounded-xl ">
                    <div className="flex flex-col justify-center space-y-5">
                        <Link href='/' className="flex items-center gap-2">
                            <SlArrowLeft className="text-gray-400 pt-[2px]" />
                            <Logo light/>
                        </Link>

                        <h3 className="text-left text-md font-medium text-gray-dark">Login</h3>
                        
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="flex flex-col space-y-4"
                        >
                            <InputField 
                                label="Username" 
                                name="username" 
                                placeholder="username"
                            />
                            <InputField 
                                label="Password" 
                                name="password" 
                                placeholder="Password" 
                                type="password"
                            />
                            <Button className="rounded-md text-white">Login</Button>
                        </form>

                        <div className="flex flex-col text-xs text-primary space-y-3">
                            <Link href="/" className="hover:text-accentBlue duration-100">Forget your password?</Link>
                            <Link href="auth/register" className="hover:text-accentBlue duration-100">Need an account?</Link>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login