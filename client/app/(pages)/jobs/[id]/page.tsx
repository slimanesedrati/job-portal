'use client'
import {  CardSection, JobCompanyDetailCard, JobDetailCard, Logo } from "@/app/components";
import useSWR from 'swr';
import { getBaseUrl, getFetcher } from "@/app/utils";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { SlArrowLeft } from "react-icons/sl";

interface JobDetailParams {
    id: number
}

const BASEURL: string = getBaseUrl()

const JobDetail = ({ params: {id} }: {params: JobDetailParams}) => {
    const jobDetailsResponse = useSWR(`${BASEURL}/offers/${id}/`, getFetcher);
    console.log(jobDetailsResponse.data);
    
    const companyId = jobDetailsResponse.data?.company?.id
    const companyDetailsResponse = useSWR(`${BASEURL}/companies/${companyId}/`, getFetcher);
    console.log(companyDetailsResponse.data);
    
    return (
        <div className="w-full h-full">
            <div className="container mx-auto px-3 grid md:grid-cols-3 gap-5 py-3">
                <div className="col-span-3">
                    <CardSection>
                        <Link href={'/jobs'} className="flex items-center gap-2 text-gray-500 text-sm">
                            <SlArrowLeft />
                            <span className="">jobs</span>
                        </Link>
                    </CardSection>
                </div>
                <div className="col-span-3 md:col-span-2">
                    <JobDetailCard response={jobDetailsResponse}/>
                </div>
                <div className="col-span-3 md:col-span-1">
                    <JobCompanyDetailCard response={companyDetailsResponse}/>
                </div>
            </div>
        </div>
    )
}

export default JobDetail