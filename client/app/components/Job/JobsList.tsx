import JobCard from "./JobCard"

const JobsList = ({ response }: any) => {

  const { data, error, isLoading } = response

  if (isLoading) return (<div>Loading...</div>);
  if (error) return (<div>Something went wrong! (-_-)</div>);
  if (!data.length) return (<div>No data to show</div>)
  return (
    <section className='container mx-auto pb-36 px-6'>
      <div 
        className="
          mt-10
          px-5
          grid
          justify-center
          items-center
          grid-col-1
          md:grid-cols-2
          lg:grid-cols-3 xl:grid-cols-4
          gap-5
        "
      >
        {data?.map((i:number)=>(
          <JobCard key={i} />
        ))}
      </div>
    </section>
  )
}

export default JobsList