'use client'

import { useState } from "react"
import Search from "../Search"

const HomeHerro = () => {
    const [queryValue, setQueryValue] = useState('')
    const [whereValue, setWhereValue] = useState('')
  
    return (
        <>
            <section id="hero" className="bg-light">
                <div className="container mx-auto p-6 ">
                    <div className="grid gap-20 mb-32 lg:mt-16 px-6  xl:mb-52">
                        {/* Content */}
                        <div>
                            <h2 className="text-3xl lg:text-5xl text-gray-dark mb-5 font-bold text-center lg:max-w-md lg:text-left">
                                Find Dream Intership
                            </h2>
                            <p className="text-sm text-gray-500 text-center lg:max-w-md lg:text-left">
                                Explore thousands of <span className="text-primary">Interships</span> and Jobs opportunities with all
                                the information you need.
                            </p>
                        </div>
                        {/* Form */}
                        <div className="max-w-[714px]">

                            <form onSubmit={(e)=>e.preventDefault()}>
                                <Search setQueryValue={setQueryValue} setWhereValue={setWhereValue} queryValue={queryValue} whereValue={whereValue} white large/>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeHerro