import { Link } from 'react-router-dom';


import sportify_logo from '../../../assets/Spotify-White-Logo.wine.svg'

export default function NavBar() {
    return (
        <nav className="bg-black pt-8 pr-0 pb-8 pl-12">
            <Link to={'/'}>
                <img className='h-9 w-28' src={sportify_logo} alt="the sporify logo" />
            </Link>
        </nav>
    );
}


export function BottomBar() {
    return (
        <nav className="bg-black pt-8 pb-8 flex justify-center">
            <p className='text-gray-400 font-extralight text-xs'>This site is protected by reCAPTCHA and the Google <a className='underline'>Privacy Policy</a>  and <a className='underline'>Terms of Service</a>  apply.</p>
        </nav>
    );
}