interface IFilters {
    offerType: string | null;
    sector: string | null;
    minSalary: number | string | null;
    maxSalary: number | string | null;
    setOfferType: (value: string) => void
    setSector: (value: string) => void;
    setMinSalary: (value: string) => void;
    setMaxSalary: (value: string) => void;
}

const Filters:React.FC<IFilters> = ({ 
    offerType,
    sector,
    minSalary,
    maxSalary,
    setOfferType,
    setSector,
    setMinSalary,
    setMaxSalary
 }) => {

    return (
        <div className="flex flex-col">
          <div className="sticky top-[9.2rem] py-5 w-56 lg:w-60 h-full  flex flex-col space-y-8">
            <div id="hf" className="select-none flex  cursor-pointer items-center font-bold text-xl text-darkGray">
              <div className="">Filters</div>
            </div>
            <div id="filters" className="duration-200 hidden md:flex flex-col space-y-5">
              <div className="flex flex-col space-y-3">
                
                <div id="filter_shedule" className="cursor-pointer text-sm select-none text-gray-med  flex items-center">
                  <div>Shedule</div>
                  <svg xmlns="http://www.w3.org/2000/svg" id="down_shedule" className="duration_200" width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M10.869 16.6308C10.811 16.5743 10.563 16.3609 10.359 16.1622C9.076
                    14.9971 6.976 11.9576 6.335 10.3668C6.232 10.1252 6.014 9.51437
                    6 9.18802C6 8.8753 6.072 8.5772 6.218 8.29274C6.422 7.93814
                    6.743 7.65368 7.122 7.49781C7.385 7.39747 8.172 7.2416 8.186 7.2416C9.047 
                    7.08573 10.446 7 11.992 7C13.465 7 14.807 7.08573 15.681 7.21335C15.695 7.22796
                    16.673 7.38383 17.008 7.55431C17.62 7.86702 18 8.47784 18 9.13151V9.18802C17.985
                    9.61374 17.605 10.509 17.591 10.509C16.949 12.0141 14.952 14.9834 13.625 16.1768C13.625 16.1768 13.284 16.5129 13.071 16.659C12.765 16.887 12.386 17 12.007 
                    17C11.584 17 11.19 16.8724 10.869 16.6308Z" fill="#808080"/>
                    </svg>
                </div>
                
                <div id="menu_shedule" className="flex-col text-xs space-y-3 hidden md:flex text-darkGray">
                  
                  <div className="flex items-center">
                    <input type="checkbox" name="checkbox-one" id="checkbox-one" className="bg-gray-200 hover:bg-gray-300 cursor-pointer 
                      w-4 h-4 border-3 border-amber-500 focus:outline-none rounded-lg" />
                    <label className="ml-3  font-medium">Full time</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" checked name="checkbox-one" id="checkbox-one" className="bg-gray-200 hover:bg-gray-300 cursor-pointer 
                      w-4 h-4 border-3 border-amber-500 focus:outline-none rounded-lg" />
                    <label className="ml-3  font-medium">Part time</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" checked name="checkbox-one" id="checkbox-one" className="bg-gray-200 hover:bg-gray-300 cursor-pointer 
                      w-4 h-4 border-3 border-amber-500 focus:outline-none rounded-lg" />
                    <label className="ml-3  font-medium">internship</label>
                  </div>
                </div>
              </div>
              
              
            </div>
        </div>
      </div>
    )
}

export default Filters