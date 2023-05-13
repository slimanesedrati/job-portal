'use client'
interface IParapms {
    label?: string;
    labelFor?: string;
    placeholder?: string;
    name: string;
    type?: string;
    value?: string;
    setValue?: (value: string) => void;
    inputProps?: any;
    error?: string;
}


const InputField:React.FC<IParapms> = ({ label, labelFor, placeholder, type='text', name, inputProps, error }) => {

    return (
        <div className="m relative py-3 text-gray-dark">
            <label 
                htmlFor={name}
                className="
                    duration-300
                    absolute
                    top-0 left-3
                    text-xs
                    bg-white
                    py-1 px-2
                "
            >
                {label}
            </label>
            
            <input 
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                {...inputProps}
                // value={value}
                // onChange={(e)=>setValue(e.target.value)}
                className="
                    py-3 px-5
                    border
                    w-full
                    rounded-md
                    duration-300
                    focus:outline-accentBlue
                "
            />
            {error && <p className="text-red text-xs">{error}</p>}
        </div>
  )
}

export default InputField