import Divider from "./divider";


export default function FormField() {
    return (
        <>
        <div className=" w-80">
            <form>
                <div className="mb-3">
                    <label className="text-white font-medium" htmlFor="emailOrUsername"> Email or Username</label>
                    <br />
                    <input className="w-80 h-11 border border-gray-500 bg-custom-color rounded-md text-white pl-2" type="text" name="emailOrUsername" required />
                </div>
                <label className="text-white font-medium" htmlFor="password"> Password</label>
                <br />
                <input className="w-80 h-11 border border-gray-500 bg-custom-color rounded-md text-white pl-2" type="password" name="password" required />
                <div className="flex items-center mt-4 mb-8">
                    <input className=" ml-1 mr-3" type="checkbox" />
                    <p className="text-white">Remember me</p>
                </div>

                <button  className="bg-green-500 text-black font-bold mb-8 w-80 h-12 rounded-full" type="button">Log in</button>
            </form>
            <div className="flex justify-center">
            <a className="text-white font-medium text-center" href="#">Forgot your password?</a>
            </div>
        </div>
        <Divider/>
        <div className="flex justify-center mb-11">
            <p className="text-gray-400 mr-2">
            Don't have an account?
            </p>
            <a className="text-white font-medium text-center" href="#">Sign up for Spotify</a>
            </div>
        </>
    )
}