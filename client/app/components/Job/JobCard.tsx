'user client'
import Button from "../Button"
import { SafeJobType } from "@/types"
import moment from "moment"
import Avatar from "../Avatar"


const JobCard: React.FC<SafeJobType> = ({ title, salary, created_at, description, company, offer_type, sector }) => {
    return (
        <div className="relative border border-gray-300 flex flex-col space-y-3 p-5 duration-200 hover:border-blue rounded-xl hover:shadow-md bg-white">
            {/* Card Header */}
            <span className="absolute text-gray-med right-5 top-5 text-xs"> {moment(created_at).fromNow()} </span>
            <Avatar name={company?.name} logo_url={company?.logo} />

            {/* Card Content */}
            <h3 className="capitalize font-bold text-md mb-4"> {title} </h3>
            <div className="flex gap-1">
                <span className="bg-sky-100 px-3 py-1 text-xs  text-primary rounded-xl">{offer_type}</span>
                <span className="bg-pink-100 px-3 py-1 text-xs text-pink-900 rounded-xl">{sector}</span>
            </div>

            <div className="flex items-center space-x-2 text-gray-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.7689 8.3818H22C22 4.98459 19.9644 3 16.5156 3H7.48444C4.03556 3 2 4.98459 2 8.33847V15.6615C2 19.0154 4.03556 21 7.48444 21H16.5156C19.9644 21 22 19.0154 22 15.6615V15.3495H17.7689C15.8052 15.3495 14.2133 13.7975 14.2133 11.883C14.2133 9.96849 15.8052 8.41647 17.7689 8.41647V8.3818ZM17.7689 9.87241H21.2533C21.6657 9.87241 22 10.1983 22 10.6004V13.131C21.9952 13.5311 21.6637 13.8543 21.2533 13.8589H17.8489C16.8548 13.872 15.9855 13.2084 15.76 12.2643C15.6471 11.6783 15.8056 11.0736 16.1931 10.6122C16.5805 10.1509 17.1573 9.88007 17.7689 9.87241ZM17.92 12.533H18.2489C18.6711 12.533 19.0133 12.1993 19.0133 11.7877C19.0133 11.3761 18.6711 11.0424 18.2489 11.0424H17.92C17.7181 11.0401 17.5236 11.1166 17.38 11.255C17.2364 11.3934 17.1555 11.5821 17.1556 11.779C17.1555 12.1921 17.4964 12.5282 17.92 12.533ZM6.73778 8.3818H12.3822C12.8044 8.3818 13.1467 8.04812 13.1467 7.63649C13.1467 7.22487 12.8044 6.89119 12.3822 6.89119H6.73778C6.31903 6.89116 5.9782 7.2196 5.97333 7.62783C5.97331 8.04087 6.31415 8.37705 6.73778 8.3818Z" fill="#0077B5" />
                </svg>
                <span className="text-sm font-bold">{salary}</span>
            </div>
            <div>
                <div className="capitalize text-gray-500 text-sm space-x-1 mb-3 flex items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M3.5 10.3178C3.5 5.71789 7.34388 2 11.9934 2C16.6561 2 20.5 5.71789 20.5 10.3178C20.5 12.6357 19.657 14.7876 18.2695 16.6116C16.7388 18.6235 14.8522 20.3765 12.7285 21.7524C12.2425 22.0704 11.8039 22.0944 11.2704 21.7524C9.13474 20.3765 7.24809 18.6235 5.7305 16.6116C4.34198 14.7876 3.5 12.6357 3.5 10.3178ZM9.19423 10.5768C9.19423 12.1177 10.4517 13.3297 11.9934 13.3297C13.5362 13.3297 14.8058 12.1177 14.8058 10.5768C14.8058 9.0478 13.5362 7.77683 11.9934 7.77683C10.4517 7.77683 9.19423 9.0478 9.19423 10.5768Z"
                            fill="darkGray" />
                    </svg>
                    <span>{company?.location}</span>
                </div>
                <p className="text-xs text-gray-500">{description?.length>50?description?.slice(0, 50) + '...':description}</p>
            </div>
            {/* Card Footer */}
            <div className="flex gap-x-3 py-4">
                <Button className="w-1/2 bg-white border-2 border-primary text-primary rounded-lg hover:bg-primary hover:bg-opacity-10 duration-150 capitalize">
                    Contact
                </Button>
                <Button  className="w-1/2 text-white rounded-lg border-2 border-primary duration-150 hover:bg-opacity-75  capitalize">
                    Apply
                </Button>
            </div>

        
        </div>
    )
}

export default JobCard