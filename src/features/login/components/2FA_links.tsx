
import react_logo from '../../../assets/react.svg';

export default function TwoFactorAuthLinks(){
    return (
        <div className=" border border-gray-500 w-80 h-12 flex items-center justify-around flex-row  rounded-full mb-2">
            <img src={react_logo} alt="" />
            <p className="text-white pr-10 font-medium">Continue with Google</p>
        </div>
    )
}


export function ContinueWithNumber(){
    return (
        <div className=" border border-gray-500 w-80 h-12 flex items-center justify-center flex-row  rounded-full mb-2">
            <p className="text-white font-medium">Continue with Phone Number</p>
        </div>
    )
}