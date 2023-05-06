'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import {  JobsList, Search } from '@/app/components'
import useSWR from 'swr'
import axios from 'axios'


interface IJob {
  id: number;
  title: string;
  company_name: string;
  location: string;
  salary: string;
  description: string;
}

interface JobsProps {
  jobs: IJob[];
}

const BASEURL:string = "http://127.0.0.1:8000/api"

const fetcher = (url:string) => axios.get<IJob[]>(url).then((res) => res.data)

const Jobs = () => {
  const searchParams = useSearchParams()

  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [where, setWhere] = useState(searchParams.get('where') || '')
  const [offerType, setOfferType] = useState(searchParams.get('offerType') || '')
  const [sector, setSector] = useState(searchParams.get('sector') || '') 
  const [minSalary, setMinSalary] = useState(searchParams.get('minSalary') || '')
  const [maxSalary, setMaxSalary] = useState(searchParams.get('maxSalary') || '')
  
  const response = useSWR(`${BASEURL}/jobs/search/?query=${query}&location=${where}&offer_type=${offerType}&sector=${sector}&min_salary=${minSalary}&max_salary=${maxSalary}`, fetcher);
  console.log(response);
  
  
  
  return (
    <div>

      <div className="container mx-auto bg-white px-6 md:sticky top-[4.04rem] flex flex-col justify-center z-10  max-w-screen py-3 border-b border-gray-200">
        <form onSubmit={(e)=>e.preventDefault()}>
          <div className="max-w-[714px] mx-auto">
            <Search setQueryValue={setQuery} setWhereValue={setWhere} queryValue={query} whereValue={where} light small />
          </div>
        </form>
      </div>

      {/* Result */}
      <JobsList response={response}/>
  

    </div>
  )
}

export default Jobs