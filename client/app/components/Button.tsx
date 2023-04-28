import Link from 'next/link'

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    asLink?: boolean;
    url?: string;
    className?: string;
}



const Button: React.FC<ButtonProps> = ({ children, onClick, asLink=false, url, className }) => {
    if (asLink) {
        return (
            <Link
                href={`/${url}`}
                className={`
                    px-8
                    py-3
                    font-bold
                    bg-primary
                    hover:opacity-70'
                    ${className}
                `}
            >
                {children}
            </Link>
        )
    }
    return (
        <button
            className={`
                px-8
                py-3
                font-bold
                bg-primary
                hover:opacity-70'
                ${className}
            `}
        >
            {children}
        </button>
    )
}

export default Button