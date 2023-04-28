'use-client'

import { Syne_Mono, Sedgwick_Ave_Display, Macondo, Rock_Salt } from 'next/font/google'

const font = Macondo({
    weight: "400",
    subsets: ['latin']
})

interface IParams {
    icon?: React.ReactNode;
    clasName?: string;
    title?: string;
    description?: string;
}

const HomeHowToUseBox:React.FC<IParams> = ({ icon, clasName, title, description }) => {
  return (
    <div className={`relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3 ${clasName}`}>
        {/* <!-- Image Positioning --> */}
        <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
            {/* <!-- Image Container For Background & Center --> */}
            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-gray-dark text-white text-2xl">
                {icon}
            </div>
        </div>
        <h5 className={`pt-6 text-xl font-bold text-center capitalize md:text-left text-gray-dark ${font.className}`}>
            {title}
        </h5>
        <p className="text-center text-gray-500 md:text-left">
            {description}
        </p>
    </div>
  )
}

export default HomeHowToUseBox