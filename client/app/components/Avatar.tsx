'use client'
import Image from 'next/image'
import React from 'react'

interface IAvatar {
    logo_url?: string;
    name: string;
}

const Avatar:React.FC<IAvatar> = ({ logo_url, name }) => {
  return (
    <figure className="bg-zinc-100 w-[40px] h-[40px] rounded-full p-1 object-cover overflow-hidden grid place-items-center">
        {logo_url?(
            <Image src={`http://127.0.0.1:8000${logo_url}`} className="" width={40} height={40} alt={name} />
        ):(
            <span className='text-gray-400 font-bold'>{name?.slice(0, 1)}</span>
        )}
    </figure>
  )
}

export default Avatar