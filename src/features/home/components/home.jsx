import sportify_logo from '../../../assets/Spotify-White-Logo.wine.svg'
import { FaHome, FaSearch } from 'react-icons/fa';



export default function Home() {
    return (
        <section className="bg-black h-screen flex flex-col px-1 py-1">

            <section className="h-87%  flex flex-row">
                <div className="flex-grow  flex flex-col">
                    <div className=" flex-grow px-1 py-1">
                        <div className="bg-custom-color h-full rounded-lg  px-2">
                            <div className=" h-full flex flex-col justify-evenly">
                                <img className='h-11 w-28' src={sportify_logo} alt="" />
                                <div className='flex flex-row items-end ml-3'>
                                    <FaHome className='text-white h-6 w-6'/>
                                    <p className='text-white font-bold ml-5'>Home</p>
                                </div>
                                <div className='flex flex-row items-end ml-3'>
                                    <FaSearch className='text-gray-600 h-6 w-6'/>
                                    <p className='text-gray-600 font-bold ml-5'>Search</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="h-70%  px-1 py-1">
                        <div className="bg-custom-color h-full rounded-lg">

                        </div>
                    </div>
                </div>
                <div className="w-73%  px-1 py-1">
                    <div className="bg-custom-color h-full rounded-lg">

                    </div>
                </div>

            </section>
            <section className=" flex-grow flex flex-row  items-center px-5 justify-between bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 my-1 mx-1" >
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