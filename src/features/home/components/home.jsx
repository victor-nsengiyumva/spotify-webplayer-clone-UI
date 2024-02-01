import sportify_logo from '../../../assets/Spotify-White-Logo.wine.svg'
import { FaHome, FaSearch, FaPlus } from 'react-icons/fa';
import library_image from '../../../assets/library-gray.svg'




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
                                <FaPlus className='text-gray-400'/>
                            </div>
                            <div className='border border-white h-40 min-h-40 py-2 px-2 flex flex-col overflow-y-auto'>
                                <div className='h-40 min-h-40 bg-gray-100'>
                                    yeah
                                </div>
                                <div className='h-40 min-h-40 bg-gray-100 mt-3'>
                                    yeah
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-73%  px-1 py-1">
                    <div className="bg-custom-color h-full rounded-lg">

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
                <button type="button" className="h-12 bg-white font-bold px-6 rounded-full">
                    Sign up free
                </button>
            </section>
        </section>
    )
}