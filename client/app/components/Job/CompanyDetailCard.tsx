'use client'
import { Avatar, Button, Loading } from "..";
import CardSection from "../CardSection"

const CompanyDetailCard = ({response}:any) => {
  const { data, isLoading, error } = response;
  console.log('logo url:',data?.logo);
  
  if (isLoading) {
    return (
      <CardSection>
        <Loading />
      </CardSection>
    )
  };
  if (error) {
    return (
      <CardSection>
        <div className="text-center">Something went wrong! (-_-)</div>
      </CardSection>
    )
  };

  return (
    <CardSection>
      {/* <h1 className="text-xl text-primary/50">About the company</h1> */}
      <div className="w-fit mx-auto mb-5">
        <Avatar large name={data.name} logo_url={data.logo} />
      </div>
      <h1 className="text-xl text-center font-bold mb-5">{data.name}</h1>
      <p className="text-sm text-center text-gray-500 mb-5">{data.description}</p>
      <div className="w-full">
        <Button className="w-full rounded-md border-2 border-primary text-primary bg-transparent">Contact</Button>
      </div>
    </CardSection>
  )
}

export default CompanyDetailCard