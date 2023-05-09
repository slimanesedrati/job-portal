import { Loading } from "..";
import JobCard from "./JobCard"
import { SafeJobType } from "@/types";


const JobsList = ({ response }: any) => {

  const { data, error, isLoading } = response

  if (isLoading) return (<Loading />);
  if (error) return (<div>Something went wrong! (-_-)</div>);
  if (!data.length) return (<div>No data to show</div>)
  return (
    <section className=''>
      <div 
        className="
          px-10
          grid
          justify-center
          items-center
          grid-cols-1
          
          lg:grid-cols-2
          xl:grid-cols-3
          2xl:grid-cols-4
          gap-5
        "
      >
        {data?.map((item:SafeJobType, i:number)=>(
          <JobCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export default JobsList