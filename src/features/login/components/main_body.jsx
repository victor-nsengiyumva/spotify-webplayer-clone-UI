import TwoFactorAuthLinks, { ContinueWithNumber } from "./2FA_links";
import Divider from "./divider";
import FormField from "./form_field";
// import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import google_icon from '../../../assets/icons8-google-48.png'
import facebook_icon from '../../../assets/icons8-facebook-48.png'
import apple_icon from '../../../assets/icons8-apple-50.png'





export default function MainBody() {
    return (
        <section className="bg-custom-color ">
            <div className="bg-black mt-9 mb-9 flex flex-col items-center justify-center rounded-md  w-1/2 min-w-custom1 mx-auto">
                <p className="text-white font-bold text-5xl pt-16 pb-16">
                    Log in to Spotify
                </p>
                <TwoFactorAuthLinks icon={google_icon}/>
                <TwoFactorAuthLinks icon={facebook_icon}/>
                <TwoFactorAuthLinks icon={apple_icon}/>
                <ContinueWithNumber/>
                <Divider/>
                <FormField/>
            </div>
        </section>
    )
}