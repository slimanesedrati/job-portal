'use client'

import Button from "../Button"

const HomeHerro = () => {
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

                        <form
                            className="
                                bg-white
                                w-full
                                flex
                                flex-col
                                md:flex-row
                                space-y-2
                                md:space-x-3 
                                md:space-y-0 
                                pt-3 md:p-3
                                rounded-md
                                text-gray-dark
                                font-medium
                                mx-auto
                            "
                        >
                            {/* Input */}
                            <div className="relative w-full flex md:px-0 md:border-r border-gray-300 border-b pb-3 md:pb-0 md:border-b-0">
                                <input type="text" className="outline-none w-full bg-white md:w-64 py-3 px-10 rounded-md " placeholder="Job Title" />
                                <div className="absolute top-3 left-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M10.7044 3.51898C10.034 3.51898 9.46373 3.9848 9.30365 4.61265H14.6863C14.5263 3.9848 13.956 3.51898 13.2856 3.51898H10.7044ZM16.2071 4.61264H18.1881C20.2891 4.61264 22 6.34428 22 8.47085C22 8.47085 21.94 9.3711 21.92 10.6248C21.918 10.724 21.8699 10.8212 21.7909 10.88C21.3097 11.2354 20.8694 11.5291 20.8294 11.5493C19.1686 12.6632 17.2386 13.447 15.1826 13.8369C15.0485 13.8632 14.9165 13.7934 14.8484 13.6739C14.2721 12.6754 13.1956 12.0253 11.995 12.0253C10.8024 12.0253 9.71586 12.6683 9.12256 13.6678C9.05353 13.7853 8.92346 13.8531 8.7904 13.8278C6.75138 13.4369 4.82141 12.6541 3.17059 11.5594L2.21011 10.8911C2.13007 10.8405 2.08004 10.7493 2.08004 10.6481C2.05003 10.1316 2 8.47085 2 8.47085C2 6.34428 3.71086 4.61264 5.81191 4.61264H7.78289C7.97299 3.1443 9.2036 2 10.7044 2H13.2856C14.7864 2 16.017 3.1443 16.2071 4.61264ZM21.6598 12.8152L21.6198 12.8355C19.5988 14.1924 17.1676 15.0937 14.6163 15.4684C14.2561 15.519 13.8959 15.2861 13.7959 14.9216C13.5758 14.0912 12.8654 13.5443 12.015 13.5443H12.005H11.985C11.1346 13.5443 10.4242 14.0912 10.2041 14.9216C10.1041 15.2861 9.74387 15.519 9.38369 15.4684C6.83242 15.0937 4.4012 14.1924 2.38019 12.8355C2.37019 12.8254 2.27014 12.7646 2.1901 12.8152C2.10005 12.8659 2.10005 12.9874 2.10005 12.9874L2.17009 18.1519C2.17009 20.2785 3.87094 22 5.97199 22H18.018C20.1191 22 21.8199 20.2785 21.8199 18.1519L21.9 12.9874C21.9 12.9874 21.9 12.8659 21.8099 12.8152C21.7599 12.7849 21.6999 12.795 21.6598 12.8152ZM12.7454 17.0583C12.7454 17.4836 12.4152 17.8177 11.995 17.8177C11.5848 17.8177 11.2446 17.4836 11.2446 17.0583V15.7519C11.2446 15.3367 11.5848 14.9924 11.995 14.9924C12.4152 14.9924 12.7454 15.3367 12.7454 15.7519V17.0583Z"
                                            fill="darkGray"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="relative w-full flex ">
                                <input type="text" className="outline-none w-full bg-white md:w-64 py-3 px-10 rounded-md" placeholder="Location" />
                                <div className="absolute top-3 left-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M3.5 10.3178C3.5 5.71789 7.34388 2 11.9934 2C16.6561 2 20.5 5.71789 20.5 10.3178C20.5 12.6357 19.657 14.7876 18.2695 16.6116C16.7388 18.6235 14.8522 20.3765 12.7285 21.7524C12.2425 22.0704 11.8039 22.0944 11.2704 21.7524C9.13474 20.3765 7.24809 18.6235 5.7305 16.6116C4.34198 14.7876 3.5 12.6357 3.5 10.3178ZM9.19423 10.5768C9.19423 12.1177 10.4517 13.3297 11.9934 13.3297C13.5362 13.3297 14.8058 12.1177 14.8058 10.5768C14.8058 9.0478 13.5362 7.77683 11.9934 7.77683C10.4517 7.77683 9.19423 9.0478 9.19423 10.5768Z"
                                            fill="darkGray" />
                                    </svg>
                                </div>
                            </div>
                            {/* <Button className="w-full text-white rounded-md">Search</Button> */}
                            <Button className="w-full flex justify-center space-x-2 text-white items-center font-bold rounded-b-md  md:rounded-md px-8 py-3  hover:opacity-70">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <circle cx="11.7666" cy="11.7666" r="8.98856" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                    <path opacity="0.4" d="M18.0183 18.4852L21.5423 22.0001" stroke="white" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>Search</span>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default HomeHerro