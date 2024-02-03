import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import Divider from '../../login/components/divider';


export default function Footer() {
    return (
        <>
            <div className="h-56 mt-20  flex flex-wrap px-6 space-x-16">
                <ul>
                    <li className="text-white font-bold mb-2">
                        Company
                    </li>
                    <li className="text-gray-400 mb-2">
                        About
                    </li>
                    <li className="text-gray-400 mb-2">
                        Jobs
                    </li>
                    <li className="text-gray-400 mb-2">
                        For the record
                    </li>
                </ul>
                <ul>
                    <li className="text-white font-bold mb-2">
                        Communities
                    </li>
                    <li className="text-gray-400 mb-2">
                        For Artists
                    </li>
                    <li className="text-gray-400 mb-2">
                        Developers
                    </li>
                    <li className="text-gray-400 mb-2">
                        Advertising
                    </li>
                    <li className="text-gray-400 mb-2">
                        Investors
                    </li>
                    <li className="text-gray-400 mb-2">
                        Vendors
                    </li>
                </ul>
                <ul>
                    <li className="text-white font-bold mb-2">
                        Useful links
                    </li>
                    <li className="text-gray-400 mb-2">
                        Support
                    </li>
                    <li className="text-gray-400 mb-2">
                        Free Mobile App
                    </li>
                    <li className="text-gray-400 mb-2">
                        Consumer rights
                    </li>
                    <li className="text-gray-400 mb-2">
                        Investors
                    </li>
                    <li className="text-gray-400 mb-2">
                        Vendors
                    </li>
                </ul>
                <div className='flex justify-evenly h-20 items-start'>
                    <div className='mr-2 h-8 w-8 rounded-full bg-black flex items-center justify-center hover:bg-custom-color-2'>
                        <FaInstagram className='text-white' />
                    </div><div className='mr-2 h-8 w-8 rounded-full bg-black flex items-center justify-center hover:bg-custom-color-2'>
                        <FaTwitter className='text-white' />
                    </div><div className='h-8 w-8 rounded-full bg-black flex items-center justify-center hover:bg-custom-color-2'>
                        <FaFacebook className='text-white' />
                    </div>
                </div>

            </div>
            <div className='mb-2 px-6 flex'>
                <Divider className={"bg-gray-400"} />
            </div>
            <div className='ml-6 mb-16 text-gray-400'>
                &copy; 2024 Spotify AB
            </div>
        </>
    )
}