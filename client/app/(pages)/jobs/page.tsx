'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import {  Filters, JobsList, Search } from '@/app/components'
import useSWR from 'swr'
import axios from 'axios'
import { SafeJobType } from '@/types'

interface JobsProps {
  jobs: SafeJobType[];
}

const BASEURL:string = "http://127.0.0.1:8000/api"

const fetcher = (url:string) => axios.get<SafeJobType[]>(url).then((res) => res.data)

const Jobs = () => {
  const searchParams = useSearchParams()

  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [where, setWhere] = useState(searchParams.get('where') || '')
  const [offerType, setOfferType] = useState(searchParams.get('offerType') || '')
  const [sector, setSector] = useState(searchParams.get('sector') || '') 
  const [minSalary, setMinSalary] = useState(searchParams.get('minSalary') || '')
  const [maxSalary, setMaxSalary] = useState(searchParams.get('maxSalary') || '')
  
  const response = useSWR(`${BASEURL}/offers/search/?query=${query}&location=${where}&offer_type=${offerType}&sector=${sector}&min_salary=${minSalary}&max_salary=${maxSalary}`, fetcher);
  
  
  
  return (
    <div>

      <div className="container mx-auto bg-white px-6 md:sticky md:top-[56px] lg:top-[4.04rem] flex flex-col justify-center z-20  max-w-screen py-3 border-b border-gray-200">
        <form onSubmit={(e)=>e.preventDefault()}>
          <div className="max-w-[714px] mx-auto">
            <Search setQueryValue={setQuery} setWhereValue={setWhere} queryValue={query} whereValue={where} light small />
          </div>
        </form>
      </div>

      {/* Result */}
      <div 
        className="
          container
          mx-auto
          pb-36 px-3
          relative
          flex flex-col
          gap-y-4
          md:gap-y-0
          md:flex-row
        "
      >
        <Filters
          offerType={offerType}
          sector={sector}
          minSalary={minSalary}
          maxSalary={maxSalary}
          setOfferType={setOfferType}
          setSector={setSector}
          setMinSalary={setMinSalary}
          setMaxSalary={setMaxSalary}
        />
        <div className='w-full'>
          <div className="md:sticky md:top-[9.12rem] bg-white pt-5 pb-5 lg:pb-2 z-10 flex flex-col md:flex-row space-y-2 md:sapce-y-0   justify-between items-center md:space-x-8">
            <div className="text-veryDarkBlue font-bold text-xl">
              Recomended jobs <span className=" md:pl-2 text-gray-400">520</span>
            </div>
            <div className="flex items-center text-sm justify-center space-x-1 text-gray-400">
              <div className='flex gap-1'>
                <span>Sort by</span>
                <span className="text-primary">Last posted</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" id="down_level" className="duration-200" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M10.869 16.6308C10.811 16.5743 10.563 16.3609 10.359 16.1622C9.076
                14.9971 6.976 11.9576 6.335 10.3668C6.232 10.1252 6.014 9.51437
                6 9.18802C6 8.8753 6.072 8.5772 6.218 8.29274C6.422 7.93814
                6.743 7.65368 7.122 7.49781C7.385 7.39747 8.172 7.2416 8.186 7.2416C9.047 
                7.08573 10.446 7 11.992 7C13.465 7 14.807 7.08573 15.681 7.21335C15.695 7.22796
                16.673 7.38383 17.008 7.55431C17.62 7.86702 18 8.47784 18 9.13151V9.18802C17.985
                9.61374 17.605 10.509 17.591 10.509C16.949 12.0141 14.952 14.9834 13.625 16.1768C13.625 16.1768 13.284 16.5129 13.071 16.659C12.765 16.887 12.386 17 12.007 
                17C11.584 17 11.19 16.8724 10.869 16.6308Z" fill="#808080"/>
                </svg>
            </div>
          </div>
          <JobsList response={response}/>
        </div>
      </div>
  

    </div>
  )
}

export default Jobs