import { HomeHerro, HomeHowToUse, JobCard } from "../components"



export default function Home() {
  return (
    <div className="w-full h-full bg-light">
      <HomeHerro />
      <HomeHowToUse />
      <JobCard />
    </div>
  )
}
