import Avatar from './Avatar'
import {
    RiHeart3Line,
    RiHome5Line,
    RiVidicon2Line,
    RiChat3Line
} from 'react-icons/ri'

const Icons = () => {
    return (
        <div className='text-[#161b22] flex items-center gap-5'>
            <RiHome5Line className='text-2xl text-[#161b22] cursor-pointer transition-colors duration-300 hover:text-black' />
            <RiVidicon2Line className='text-2xl text-[#161b22] cursor-pointer transition-colors duration-300 hover:text-black' />
            <RiHeart3Line className='text-2xl text-[#161b22] cursor-pointer transition-colors duration-300 hover:text-black' />
            <RiChat3Line className='text-2xl text-[#161b22] cursor-pointer transition-colors duration-300 hover:text-black' />
            <Avatar />
        </div>
    )
}
export default Icons
