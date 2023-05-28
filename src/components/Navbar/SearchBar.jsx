const SearchBar = () => {
    return (
        <form className='bg-gray-200/80 flex items-center text-[#161b2286] text-base p-2 rounded-lg   '>
            <input
                type='text'
                className=' w-2/3 grow  lg:w-72 px-2 bg-transparent outline-none '
            />
            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 text-[#161b22] cursor-pointer'>
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                />
            </svg>
        </form>
    )
}
export default SearchBar
