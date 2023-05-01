"use client"

import { Button } from "@/app/components"

interface JobDetailParams {
    id: number
}

const JobDetail = ({ params: {id} }: {params: JobDetailParams}) => {
    return (
        <div>
            <h1 className="text-xl">Job N*{id}</h1>
            <Button asLink url="/" className="text-primary bg-transparent">Go back</Button>
        </div>
    )
}

export default JobDetail