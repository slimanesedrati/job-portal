'use-client'
interface LogoPropsTyps {
    light?: boolean;
}
const Logo:React.FC<LogoPropsTyps> = ({ light=false}) => {
  return (
    <span 
        className={`
            font-bold
            text-2xl
            ${light?'text-gray-light':'text-primary'}
        `}
    >
        GI
    </span>
  )
}

export default Logo