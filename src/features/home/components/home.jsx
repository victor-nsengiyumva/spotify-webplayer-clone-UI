import sportify_logo from '../../../assets/Spotify-White-Logo.wine.svg'
import { FaHome, FaSearch, FaPlus } from 'react-icons/fa';
import library_image from '../../../assets/library-gray.svg'
import back_arrow from '../../../assets/back-arrow.svg'
import forward_arrow from '../../../assets/forward-arrow.svg'



export default function Home() {
    return (
        <section className="bg-black h-screen flex flex-col px-1 py-1">

            <section className="h-87%  flex flex-row min-h-560 ">
                <div className="flex-grow  flex flex-col  min-w-80">
                    <div className=" flex-grow px-1 py-1">
                        <div className="bg-custom-color h-full rounded-lg  px-2">
                            <div className=" h-full flex flex-col justify-evenly">
                                <img className='h-11 w-28' src={sportify_logo} alt="" />
                                <div className='flex flex-row items-end ml-3'>
                                    <FaHome className='text-white h-6 w-6' />
                                    <p className='text-white font-bold ml-5'>Home</p>
                                </div>
                                <div className='flex flex-row items-end ml-3'>
                                    <FaSearch className='text-gray-400 h-6 w-6' />
                                    <p className='text-gray-400 font-bold ml-5'>Search</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="h-70%  px-1 py-1">
                        <div className="bg-custom-color h-full rounded-lg ">
                            <div className='h-53.3px flex flex-row items-center pl-2 justify-between pr-3'>
                                <div className='flex flex-row ml-3 '>
                                    <img className="h-6 w-6" src={library_image} alt="" />
                                    <p className='text-gray-400 font-bold ml-5'>Your Library</p>
                                </div>
                                <FaPlus className='text-gray-400' />
                            </div>
                            <div className=' h-40 min-h-40 py-2 px-2 flex flex-col overflow-hidden hover:overflow-y-auto'>
                                <div className='h-40 min-h-40 bg-custom-color-2 rounded-lg py-3 px-3 flex flex-col justify-evenly'>
                                    <p className='text-white font-bold'>
                                        Create your first playlist
                                    </p>
                                    <p className='text-white'>
                                        Its easy, we'll help you
                                    </p>
                                    <button type="button" className="h-9 w-44 bg-white font-bold px-6 rounded-full text-sm">
                                        Create Playlist
                                    </button>
                                </div>
                                <div className='h-40 min-h-40 bg-custom-color-2 rounded-lg py-3 px-3 flex flex-col justify-evenly mt-3'>
                                    <p className='text-white font-bold'>
                                        Let's find some podcasts to follow
                                    </p>
                                    <p className='text-white'>
                                        We'll keep you updated on new episodes
                                    </p>
                                    <button type="button" className="h-9 w-44 bg-white font-bold px-6 rounded-full text-sm">
                                        Browse podcasts
                                    </button>
                                </div>
                            </div>
                            <div className=' my-6 mx-6'>
                                <div className='flex flex-row items-center justify-start mb-3'>
                                    <p className='text-xs text-gray-400 mr-3'>Legal</p>
                                    <p className='text-xs text-gray-400 mr-3'>Privacy Center</p>
                                    <p className='text-xs text-gray-400 mr-3'>
                                        Privacy Policy
                                    </p>
                                </div>
                                <div className='flex flex-row items-center justify-start mb-3'>
                                    <p className='text-xs text-gray-400 mr-3'>Cookie Settings</p>
                                    <p className='text-xs text-gray-400 mr-3'>About Ads</p>
                                    <p className='text-xs text-gray-400 mr-3'>
                                        Accessibility
                                    </p>
                                </div>
                                <div className='flex flex-row items-center justify-start mb-3'>
                                    <p className='text-xs text-gray-400 mr-3'>Cookies</p>

                                </div>
                                <button className='text-white font-bold mt-3 h-9 w-28 border border-gray-400 rounded-full'>
                                    English
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-73%  px-1 py-1">
                    <div className="bg-custom-color h-full rounded-lg ">
                        <nav className='h-16 bg-custom-color-3 rounded-tl-lg rounded-tr-lg flex flex-row items-center px-6 justify-between'>
                            <div className='flex' id='nav-icons'>
                                <div className='h-7 w-7 rounded-full bg-black'>
                                    <img src={back_arrow} className='h-6 w-6' alt="" />
                                </div>
                                <div className='h-7 w-7 rounded-full bg-black flex items-center justify-center ml-3'>
                                    <img src={forward_arrow} className='h-4 w-4' alt="" />
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <p className='text-gray-400'>Sign up</p>
                                <button type="button" className="h-10 bg-white font-bold px-6 rounded-full text-sm ml-4">
                                    Log in
                                </button>
                            </div>
                        </nav>

                    </div>
                </div>

            </section>
            <section className=" flex-grow flex flex-row  items-center px-5 justify-between bg-gradient-to-r from-pink-800 via-purple-500 to-blue-500 my-1 mx-1" >
                <div>
                    <p className="text-white font-medium">
                        Preview of spotify
                    </p>
                    <p className="text-white">
                        Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed
                    </p>
                </div>
                <button type="button" className="h-12 bg-white font-bold px-6 rounded-full text-sm">
                    Sign up free
                </button>
            </section>
        </section>
    )
}