'use client'
import { Button, InputField, Logo } from "@/app/components"
import Link from "next/link"
import { SlArrowLeft } from 'react-icons/sl'
// import useSWR from 'swr'
import  { useEffect, useState } from 'react'
import { useSearchParams } from "next/navigation"
import toast, { Toaster } from "react-hot-toast"


const Login = () => {
    const searchParams = useSearchParams()
    useEffect(()=> {
        if (searchParams.get('success') === 'registration') {
            const message: string = "Successfully registred."
            toast.success(message);
        }
    }, [])

    
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
                        
                        <form className="flex flex-col space-y-4">
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