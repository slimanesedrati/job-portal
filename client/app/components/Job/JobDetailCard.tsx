import { Button, Loading } from "..";
import CardSection from "../CardSection"

const JobDetailCard = ({ response }: any) => {
  const { data, isLoading, error } = response
  if (isLoading) return (<Loading />);
  if (error) return (<div className="text-center">Something went wrong! (-_-)</div>);
  
  return (
    <CardSection>
      <div className="flex justify-between items-center gap-1 flex-nowrap mb-5">
        <h3 className="text-2xl font-semibold items-center">{data.title}</h3>
        <Button className="text-light rounded-full text-sm w-fit">Apply</Button>
      </div>
      <div className="mb-5">
        <span className="text-xl text-primary/50">About</span>
        <p className="text-gray-500">{data.description}</p>
      </div>
      <div className="flex gap-1 mb-5">
          <span className="font-semibold bg-sky-100 px-3 py-1 text-xs  text-primary rounded-xl">{data.offer_type}</span>
          <span className="font-semibold bg-pink-100 px-3 py-1 text-xs text-pink-800 rounded-xl">{data.sector}</span>
      </div>
      <div className="flex items-center space-x-2 text-gray-500 mb-5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M17.7689 8.3818H22C22 4.98459 19.9644 3 16.5156 3H7.48444C4.03556 3 2 4.98459 2 8.33847V15.6615C2 19.0154 4.03556 21 7.48444 21H16.5156C19.9644 21 22 19.0154 22 15.6615V15.3495H17.7689C15.8052 15.3495 14.2133 13.7975 14.2133 11.883C14.2133 9.96849 15.8052 8.41647 17.7689 8.41647V8.3818ZM17.7689 9.87241H21.2533C21.6657 9.87241 22 10.1983 22 10.6004V13.131C21.9952 13.5311 21.6637 13.8543 21.2533 13.8589H17.8489C16.8548 13.872 15.9855 13.2084 15.76 12.2643C15.6471 11.6783 15.8056 11.0736 16.1931 10.6122C16.5805 10.1509 17.1573 9.88007 17.7689 9.87241ZM17.92 12.533H18.2489C18.6711 12.533 19.0133 12.1993 19.0133 11.7877C19.0133 11.3761 18.6711 11.0424 18.2489 11.0424H17.92C17.7181 11.0401 17.5236 11.1166 17.38 11.255C17.2364 11.3934 17.1555 11.5821 17.1556 11.779C17.1555 12.1921 17.4964 12.5282 17.92 12.533ZM6.73778 8.3818H12.3822C12.8044 8.3818 13.1467 8.04812 13.1467 7.63649C13.1467 7.22487 12.8044 6.89119 12.3822 6.89119H6.73778C6.31903 6.89116 5.9782 7.2196 5.97333 7.62783C5.97331 8.04087 6.31415 8.37705 6.73778 8.3818Z" fill="#0077B5" />
          </svg>
          <span className="text-sm font-bold">{data.salary}</span>
      </div>
    </CardSection>
  )
}

export default JobDetailCard