"use client"
import { Button, InputField, Logo } from "@/app/components"
import Link from "next/link"
import { SlArrowLeft } from "react-icons/sl"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { createNewStudent } from "@/app/utils"
import { AxiosError } from "axios"

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
        
        const response = await createNewStudent(data)

        if (response instanceof Error) {
            console.log(response);
            
            setErrors(response.response?.data);

            console.log(errors);
            
        } else {
            console.log('success');
            router.push('/auth/login/?success=registration')
        }
    
    }

    return (
        <div className="min-h-screen bg-white md:bg-light flex  md:p-0 leading-tight">
        <div className="container flex justify-center md:items-center max-w-5xl  mx-auto py-20">
            <div className="flex w-full sm:max-w-lg xl:max-w-full  justify-center xl:justify-between xl:space-x-10 sm:p-5 lg:border border-gray-200 bg-white xl:w-full  rounded-xl">
                <div className="w-1/2 bg-light hidden xl:flex rounded-md sm:p-8">
                    <div className="flex flex-col justify-between max-w-xs">
                        <Link href='/' className="flex items-center gap-2">
                            <SlArrowLeft className="text-gray-400 pt-[2px]" />
                            <Logo />
                        </Link>
                        <div className="space-y-5">
                            <h5 className="p-0 lowercase text-2xl font-bold">Let us help you to find your dream job.</h5>
                            <p className="text-gray-400" >Our registration process is quick and easy, taking no more than 5 minutes to complete.</p>
                        </div>
                        <div className="relative bg-gray-dark space-y-4 px-5 py-6 rounded-md overflow-hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute -top-4 left-5" viewBox="0 0 24 24" width="64" height="64"><path d="M4.58341 17.3211C3.55316 16.2275 3 15 3 13.0104C3 9.51092 5.45651 6.37372 9.03059 4.82324L9.92328 6.20085C6.58804 8.00545 5.93618 10.3461 5.67564 11.8221C6.21263 11.5444 6.91558 11.4467 7.60471 11.5106C9.40908 11.6778 10.8312 13.1591 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0096 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2275 13 15 13 13.0104C13 9.51092 15.4565 6.37372 19.0306 4.82324L19.9233 6.20085C16.588 8.00545 15.9362 10.3461 15.6756 11.8221C16.2126 11.5444 16.9156 11.4467 17.6047 11.5106C19.4091 11.6778 20.8312 13.1591 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0096 14.5834 17.3211Z" fill="rgba(138,142,142,1)"></path></svg>
                            <div>
                                <p className="text-white">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem sunt itaque iusto natus ipsa doloribus.
                                </p>
                            </div>
                            <div className="flex space-x-5">
                                <div className="w-10 h-10 rounded-full bg-light/50" style={{ backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}></div>
                                <div className="flex flex-col text-sm">
                                    <span className="text-white">Ahmed mohcen pew pew</span>
                                    <span className="text-gray-med">Ui/Ux Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full justify-center p-5  space-y-8 xl:w-1/2">
                    <div>
                        <h5 className="p-0 text-left mb-2 text-2xl font-bold">Get started</h5>
                        <p className="text-left text-md font-medium text-gray-500">Create your account now</p>
                    </div>
                    

                    <form 
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="flex flex-col space-y-4"
                    >
                        {/* <InputField label="Username" labelFor="username" placeholder="username" /> */}
                        <div className="flex gap-1">
                            <InputField
                                label="First Name"
                                name="first_name"
                                placeholder="First Name"
                                error={errors?.first_name?.[0]}
                                />
                            <InputField
                                label="Last Name"
                                name="last_name"
                                placeholder="Last Name"
                                error={errors?.last_name?.[0]}
                            />
                        </div>
                        <InputField 
                            label="Username" 
                            name="username" 
                            placeholder="username"
                            error={errors?.username?.[0]}

                        />
                        <InputField 
                            label="Password" 
                            name="password" 
                            placeholder="Password"
                            type="password"
                            error={errors?.password?.[0]}
                        />
                        <InputField 
                            label="Confirm Password" 
                            name="password2" 
                            placeholder="Password"
                            type="password"
                            error={errors?.password2?.[0]}
                        />
                        <Button className="rounded-md text-white">Login</Button>
                    </form>

                    <div className="flex gap-2 font-semibold">
                        <span className="text-gray-500">Have an account?</span> 
                        <Link href="auth/register" className="text-primary duration-100">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default Register