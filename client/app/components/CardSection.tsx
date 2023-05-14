'use client'

interface ICardSection {
    children: React.ReactNode
}

const CardSection:React.FC<ICardSection> = ({ children }) => {
  
    return (
        <article className="bg-gray-50/50 p-3 md:p-5 rounded">
            {children}
        </article>
    )
}

export default CardSection