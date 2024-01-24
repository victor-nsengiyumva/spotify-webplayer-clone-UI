
import sportify_logo from '../../../assets/Spotify-White-Logo.wine.svg'

export default function NavBar() {
    return (
        <nav className="bg-black pt-8 pr-0 pb-8 pl-12">
            <img className='h-9 w-28' src={sportify_logo} alt="the sporify logo" />
        </nav>
    );
}