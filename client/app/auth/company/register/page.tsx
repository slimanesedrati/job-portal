'use client'
import { Button, InputField, Logo } from "@/app/components"
import Link from "next/link"
import { SlArrowLeft } from "react-icons/sl"
import { useRef, useState } from "react"
import { createNewCompany } from "@/app/utils"
import { useRouter } from "next/navigation"
import toast, { Toaster } from "react-hot-toast"
import './styles.css'

interface IErrorResponse {
    [key: string]: string[];
}

const Register = () => {
    
    const router = useRouter()
    const formRef = useRef<HTMLFormElement>(null)
    const [errors, setErrors] = useState<IErrorResponse | null>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const data = new FormData(formRef.current ?? undefined);
        
        const response = await createNewCompany(data)

        if (response instanceof Error) {
            // @ts-ignore
            setErrors(response.response?.data);
            toast.error("This didn't work.")
        } else {
            console.log('success');
            router.push('/auth/login/?success=registration')
        }
    
    }



    return (
        <div className="min-h-screen flex px-10 py-20  magicpattern">
            <Toaster />
            <div className="container flex justify-center md:items-center  mx-auto ">
                <div className="md:border border-gray-200 bg-white w-full md:max-w-5xl rounded-xl overflow-hidden grid md:grid-cols-2">
                    <div className="hidden md:block  bg-gray-50 h-full p-8" style={{backgroundImage: "url(https://source.unsplash.com/random/?Gradient)", backgroundRepeat: "none", backgroundSize: "cover"}}>
                        <h2 className="text-3xl font-semibold">Hello there</h2>
                        <span className="text-gray-500">Create company account</span>
                    </div>
                    <div className="flex flex-col justify-center space-y-5 p-8">
                        <Link href='/' className="flex items-center text-gray-400 gap-2">
                            <SlArrowLeft className="pt-[2px]" />
                            <Logo light/>
                        </Link>

                        <h3 className="text-left text-md font-medium text-gray-dark">Register</h3>
                        
                        <form 
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="flex flex-col space-y-4" 
                        >
                            <InputField
                                label="Username"
                                name="username"
                                placeholder="username"
                                error={errors?.username?.[0]}
                            />
                            <InputField 
                                label="Company Name"
                                name="name"
                                placeholder="Company Name"
                                error={errors?.name?.[0]}
                            />
                            <InputField 
                                label="Email"
                                name="email"
                                placeholder="company@domain.com"
                                error={errors?.email?.[0]}
                            />
                            <InputField 
                                label="Website"
                                name="website"
                                placeholder="https://domain.com"
                                error={errors?.website?.[0]}
                            />
                            <InputField 
                                label="Password"
                                name="password"
                                placeholder="Password" type="password"
                                error={errors?.password?.[0]}
                            />
                            <InputField 
                                label="Confirm password"
                                name="password2"
                                placeholder="password" type="password"
                                error={errors?.password2?.[0]}
                            />
                            <Button className="rounded-md text-white">Create my company</Button>
                        </form>

                        <div className="font-semibold text-gray-500 px-1">
                            <span>Already have an account?</span>
                            <Link href="auth/login" className="text-primary">Login</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register