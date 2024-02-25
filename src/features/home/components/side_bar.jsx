
import sportify_logo from '../../../assets/Spotify-White-Logo.wine.svg'
import { FaHome, FaSearch, FaPlus } from 'react-icons/fa';
import library_image from '../../../assets/library-gray.svg'
import { Outlet, Link, useNavigate } from 'react-router-dom';


export default function SideBar() {
    return (
        <div className="flex-grow min-w-[240px] flex flex-col resize-x overflow-x-auto">
            <div className=" flex-grow px-1 py-1">
                <div className="bg-custom-color h-full rounded-lg  px-2">
                    <div className=" h-full flex flex-col justify-evenly">
                        <Link to={'/'}>
                            <img className='h-11 w-28' src={sportify_logo} alt="" />
                        </Link>
                        <Link to={'/'}>
                            <div className='flex flex-row items-end ml-3'>
                                <FaHome className='text-white h-6 w-6' />
                                <p className='text-white font-bold ml-5'>Home</p>
                            </div>
                        </Link>
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
                    <div className=' h-40 min-h-40 py-2 px-2 flex flex-col overflow-y-auto'>
                        <div className='h-40 min-h-40 bg-custom-color-2 rounded-lg py-3 px-3 flex flex-col justify-evenly'>
                            <p className='text-white font-bold'>
                                Create your first playlist
                            </p>
                            <p className='text-white text-sm'>
                                Its easy, we'll help you
                            </p>
                            <button type="button" className="h-9 w-44 bg-white font-bold px-6 rounded-full text-sm">
                                Create Playlist
                            </button>
                        </div>
                        <div className='h-40 min-h-40 bg-custom-color-2 rounded-lg py-3 px-3 flex flex-col justify-evenly mt-3'>
                            <p className='text-white font-bold text-sm'>
                                Let's find some podcasts to follow
                            </p>
                            <p className='text-white text-sm'>
                                We'll keep you updated on new episodes
                            </p>
                            <button type="button" className="h-9 w-44 bg-white font-bold px-6 rounded-full text-sm">
                                Browse podcasts
                            </button>
                        </div>
                    </div>
                    <div className=' my-6 mx-3'>
                        <div className='flex flex-row items-center justify-start mb-3'>
                            <p className='tinyFont text-gray-400 mr-3'>Legal</p>
                            <p className='tinyFont text-gray-400 mr-3'>Privacy Center</p>
                            <p className='tinyFont text-gray-400 mr-3'>
                                Privacy Policy
                            </p>
                        </div>
                        <div className='flex flex-row items-center justify-start mb-3'>
                            <p className='tinyFont text-gray-400 mr-3'>Cookie Settings</p>
                            <p className='tinyFont text-gray-400 mr-3'>About Ads</p>
                            <p className='tinyFont text-gray-400 mr-3'>
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
    )
}