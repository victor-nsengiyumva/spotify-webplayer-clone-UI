import sportify_logo from '../../../assets/Spotify-White-Logo.wine.svg'
import { FaHome, FaSearch, FaPlus } from 'react-icons/fa';
import library_image from '../../../assets/library-gray.svg'
import back_arrow from '../../../assets/back-arrow.svg'
import forward_arrow from '../../../assets/forward-arrow.svg'
import { Outlet, Link, useNavigate } from 'react-router-dom';
import SideBar from '../components/side_bar';
import PurpleFooter from '../components/purple_footer';


export default function Home() {
    

    const navigate = useNavigate();

    return (
        <section className="h-screen flex flex-col px-1 py-1">

            <section className="h-87% flex flex-row min-h-560">
                <SideBar/>
                <div className="w-[86%]  px-1 py-1 min-w-[520px]">
                    <div className="bg-custom-color h-full rounded-lg flex flex-col">
                        <nav className='py-3 bg-custom-color-3 rounded-tl-lg rounded-tr-lg flex flex-row items-center px-6 justify-between'>
                            <div className='flex' id='nav-icons'>
                                <button onClick={() => { navigate(-1) }} className='h-7 w-7 rounded-full bg-black'>
                                    <img src={back_arrow} className='h-6 w-6' alt="" />
                                </button>
                                <button onClick={() => { navigate(1) }} className='h-7 w-7 rounded-full bg-black flex items-center justify-center ml-3'>
                                    <img src={forward_arrow} className='h-4 w-4' alt="" />
                                </button>
                            </div>
                            <div className='flex items-center'>
                                <Link to={`login`}>
                                    <p className='text-gray-400'>Sign up</p>
                                </Link>
                                <Link to={`login`}>
                                    <button type="button" className="h-10 bg-white font-bold px-6 rounded-full text-sm ml-4">
                                        Log in
                                    </button>
                                </Link>
                            </div>
                        </nav>
                        <Outlet />
                    </div>
                </div>

            </section>
            <PurpleFooter/>
        </section>
    )
}