'use client'
interface IParapms {
    label?: string;
    labelFor?: string;
    placeholder?: string;
    type?: string;
}


const InputField:React.FC<IParapms> = ({ label, labelFor, placeholder, type='text' }) => {

    return (
        <div className="m relative py-3 text-gray-dark">
            <label 
                htmlFor={labelFor}
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
                id={labelFor}
                type={type}
                placeholder={placeholder}
                className="
                    py-3 px-5
                    border
                    w-full
                    rounded-md
                    duration-300
                    focus:outline-accentBlue
                "
            />
        </div>
  )
}

export default InputField