'use client'
import { HiClipboard } from 'react-icons/hi'
import { RiSearch2Fill, RiUser3Fill } from 'react-icons/ri'
import { TiUser } from 'react-icons/ti'
import HomeHowToUseBox from './HomeHowToUseBox'

const HomeHowToUse = () => {
  return (
    <>
        <section className="py-24 bg-lightbg">
            <div className="container mx-auto px-10 max-w-xs md:max-w-full">
            <h2 className="text-4xl mb-6 font-bold text-center">Get Hired in <span className="text-primary">3 Easy Steps</span></h2>
            </div>
        </section>

        {/* <!-- Feature steps --> */}
        <section id="steps" className="pb-32 bg-light">
            <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
                {/* <!-- Horizontal Line --> */}
                <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-accentBlue md:block"></div>
                {/* <!-- Vertical Line --> */}
                <div className="absolute w-2 left-1/2 h-full -ml-1 bg-accentBlue md:hidden"></div>

                {/* <!-- Box 1 --> */}
                <HomeHowToUseBox 
                    icon={<RiUser3Fill/>} 
                    title='Create an Account' 
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa suscipit.'
                />
                {/* <!-- Box 2 --> */}
                <HomeHowToUseBox 
                    icon={<RiSearch2Fill/>} 
                    title='Search Job' 
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa suscipit.'
                    clasName='mt-21 md:mt-8'
                />
                {/* <!-- Box 3 --> */}
                <HomeHowToUseBox 
                    icon={<HiClipboard/>} 
                    title='Upload Cv / Resume ' 
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa suscipit.'
                    clasName='mt-21 md:mt-16'
                />
            </div>
        </section>
    </>
  )
}

export default HomeHowToUse