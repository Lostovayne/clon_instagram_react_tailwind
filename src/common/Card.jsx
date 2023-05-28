const Card = ({ children }) => {
    return (
        <div className='w-44 relative rounded-2xl h-64 object-contain shadow transition-all duration-300 hover:scale-105 '>
            {children}
        </div>
    )
}
export default Card
