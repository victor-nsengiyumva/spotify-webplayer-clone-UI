import TwoFactorAuthLinks, { ContinueWithNumber } from "./2FA_links";
import Divider from "./divider";
import FormField from "./form_field";


export default function MainBody() {
    return (
        <section className="bg-custom-color ">
            <div className="bg-black mt-9 mb-9 flex flex-col items-center justify-center rounded-md  w-1/2 min-w-custom1 mx-auto">
                <p className="text-white font-bold text-5xl pt-16 pb-16">
                    Log in to Spotify
                </p>
                <TwoFactorAuthLinks/>
                <TwoFactorAuthLinks/>
                <TwoFactorAuthLinks/>
                <ContinueWithNumber/>
                <Divider/>
                <FormField/>
            </div>
        </section>
    )
}