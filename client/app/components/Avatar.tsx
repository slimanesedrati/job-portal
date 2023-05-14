'use client'
import Image from 'next/image'
import React from 'react'

interface IAvatar {
    logo_url?: string;
    name: string;
    large?: boolean;
    withBaseUrl?: boolean;
}

const Avatar:React.FC<IAvatar> = ({ logo_url, name, large, withBaseUrl }) => {
  return (
    <figure
      className={`
      bg-zinc-100
        ${large?'w-[150px]':'w-[40px]'}
        ${large?'h-[150px]':'h-[40px]'}
        ${large?'p-5':'p-1'}
        rounded-full
        object-cover
        overflow-hidden
        grid
        place-items-center
      `}
    >
        {logo_url?(
            <Image
              src={withBaseUrl?`http://127.0.0.1:8000${logo_url}`:logo_url}
              className=""
              width={large?150:40}
              height={large?150:40}
              alt={name}
            />
        ):(
            <span className={`text-gray-400  font-bold ${large&&'text-5xl'}`}>{name?.slice(0, 1)}</span>
        )}
    </figure>
  )
}

export default Avatar