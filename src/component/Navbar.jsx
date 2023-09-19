import { useState} from 'react'
import Cart from '../context/Cart'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch,AiFillQuestionCircle} from 'react-icons/ai'
import {CiDeliveryTruck} from 'react-icons/ci'
import {FaMotorcycle} from 'react-icons/fa'
import {IoMdContact} from 'react-icons/io'
// import {li} from 'react-router-dom'
import {Link} from 'react-router-dom'



const Nav = () => {
    const [nav,setNav] = useState(false)
    // const {open, setOpen} = useContext(CartCotext)
    return (
        
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 bg-white sticky top-0 z-10'>

            {/* Left side */}
            <div className='flex item-center'>
                <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={30} className='hover:scale-110 duration-200'/>
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                    Weed<span className='font-bold'> Bloom</span>
                </h1>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                    <p className='p-2'>Post Box</p>
                </div>
            </div>

                {/* Search Input */}
                <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                    <AiOutlineSearch size={20}/>
                    <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='Would you like ?'></input>
                </div>
                {/* Cart Button */}
                <Cart/>

        {/* buggur menu */}
            {/* overLay */}
            {nav ? <div onClick={()=>setNav(!nav)} className=' bg-gray-500 bg-opacity-75 fixed w-full h-screen top-0 left-0 z-10'></div> :''}
           
            {/* sideMenu */}
            <div className={nav ? 'bg-white fixed top-0 left-0 w-[40%] h-screen z-10 ease-in-out duration-600 sm:duration-700'
            :'bg-white fixed top-0 left-[-100%] w-[300px] h-screen z-10 transform transition ease-in-out duration-600 sm:duration-700'}>

                <AiOutlineClose onClick={()=>setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer'/>
                <Link to="/"><h2 className='text-2xl p-4'>Weed<span className='font-bold underline'>Bloom</span></h2></Link>
                <nav>
                    <ul>
                        <Link to="/Shop">
                            <li className='text-xl p-4 flex items-center hover:text-2xl'>
                                <CiDeliveryTruck size={30} className='mr-4'/>
                                 Orders
                            </li>
                        </Link> 
                        
                        <li className='text-xl p-4 flex items-center hover:text-2xl'>
                            <FaMotorcycle size={30} className='mr-4'/>
                            Delivery
                        </li>
                        <Link to="/Signup">
                            <li className='text-xl p-4 flex items-center hover:text-2xl'>
                                <IoMdContact size={30} className='mr-4'/>
                                Signup
                            </li>
                        </Link>
                        <li  className='text-xl p-4 flex items-center hover:text-2xl'>
                            <AiFillTag size={30} className='mr-4'/>
                            Promotions
                        </li>
                        <li className='text-xl p-4 flex items-center hover:text-2xl'>
                            <AiFillQuestionCircle size={30} className='mr-4'/>
                            Help
                        </li>

                    </ul>
                </nav>
            </div>
            
        </div>
        
    )
};

export default Nav;