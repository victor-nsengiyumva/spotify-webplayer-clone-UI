



export default function TwoFactorAuthLinks({icon}){
    return (
        <div className=" border border-gray-500 w-80 h-12 flex items-center justify-around flex-row  rounded-full mb-2 hover:border-white">
            <div className="h-6 w-6">
            <img src={icon} alt="" />
            </div>
            <p className="text-white pr-12 font-medium">Continue with Google</p>
        </div>
    )
}


export function ContinueWithNumber(){
    return (
        <div className=" border border-gray-500 w-80 h-12 flex items-center justify-center flex-row  rounded-full mb-2 hover:border-white">
            <p className="text-white font-medium">Continue with Phone Number</p>
        </div>
    )
}