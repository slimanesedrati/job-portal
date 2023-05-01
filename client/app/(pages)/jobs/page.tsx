import Link from "next/link"

const Jobs = () => {
  return (
    <div>
        <Link href='/jobs/1'>View Job 1</Link> <br />
        <Link href='/jobs/2'>View Job 2</Link> <br />
        <Link href='/'>Go back</Link>
    </div>
  )
}

export default Jobs