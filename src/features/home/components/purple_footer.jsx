import { Outlet, Link, useNavigate } from 'react-router-dom';


export default function PurpleFooter() {
    return (
        <section className="min-w-[755px] min-h-[80px] flex-grow flex flex-row  items-center px-5 justify-between bg-gradient-to-r from-pink-800 via-purple-500 to-blue-500 my-1 mx-1" >
            <div>
                <p className="text-white font-medium">
                    Preview of spotify
                </p>
                <p className="text-white">
                    Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed
                </p>
            </div>
            <Link to={`login`}>
                <button type="button" className="h-12 bg-white font-bold px-6 rounded-full text-sm">
                    Sign up free
                </button>
            </Link>
        </section>
    )
}