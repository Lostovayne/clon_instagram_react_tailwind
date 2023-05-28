import Icons from './Icons'
import SearchBar from './SearchBar'

const Navbar = () => {
    return (
        <div>
            <header className='flex flex-col gap-3 lg:flex-row  justify-between p-0 lg:px-10 lg:py-4 items-center'>
                <div className='flex items-center gap-2 '>
                    <img
                        src='./src/assets/logo.png'
                        alt='instagram-logo'
                        className=''
                    />
                    <h4 className=' hidden lg:block font-semibold text-[#161b22] text-2xl'>
                        Instagram
                    </h4>
                </div>
                <div className='order-5 lg:order-none'>
                    <SearchBar />
                </div>
                <div className=''>
                    <Icons />
                </div>
            </header>
        </div>
    )
}
export default Navbar
