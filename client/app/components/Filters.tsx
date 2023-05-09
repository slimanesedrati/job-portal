'use client'
interface IFilters {
    offerType: string | null;
    sector: string | null;
    minSalary:  string | number | readonly string[] | undefined;
    maxSalary:  string | number | readonly string[] | undefined;
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
                <div id="filter_shedule" className="text-sm text-gray-med">
                  <span>Shedule</span>
                </div>
                <select
                  className="text-gray-400 outline-none border border-gray-200 rounded-md p-2 cursor-pointer focus:border-primary/50"
                  onChange={(e)=>setOfferType(e.target.value)}
                >
                  <option value="" selected>All</option>
                  <option value="1" >Job</option>
                  <option value="2" >Intership</option>
                </select>
              </div>

              <div className="flex items-center gap-1 ">
                <div className="flex-1 flex flex-col space-y-3">  
                  <div id="filter_shedule" className="text-sm text-gray-med">
                    <span>Min Price</span>
                  </div>
                  <input 
                    type="text"
                    value={minSalary}
                    onChange={(e)=>setMinSalary(e.target.value)}
                    className="w-full text-gray-400 outline-none border border-gray-200 rounded-md p-2 focus:border-primary/50"
                  />
                </div>
                <div className="flex-1 flex flex-col space-y-3">  
                  <div id="filter_shedule" className="text-sm text-gray-med">
                    <span>Max Price</span>
                  </div>
                  <input 
                    type="text"
                    value={maxSalary}
                    onChange={(e)=>setMaxSalary(e.target.value)}
                    className="w-full text-gray-400 outline-none border border-gray-200 rounded-md p-2 focus:border-primary/50"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-3">  
                <div id="filter_shedule" className="text-sm text-gray-med">
                  <span>Sector</span>
                </div>
                <select
                  className="text-gray-400 outline-none border border-gray-200 rounded-md p-2 cursor-pointer focus:border-primary/50"
                  onChange={(e)=>setSector(e.target.value)}
                >
                  <option value="" selected>All</option>
                  <option value="IT" >IT</option>
                  <option value="financial" >Financial</option>
                </select>
              </div>
            </div>
        </div>
      </div>
    )
}

export default Filters