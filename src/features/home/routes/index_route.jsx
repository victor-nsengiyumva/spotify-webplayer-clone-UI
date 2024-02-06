import Footer from "../components/footer";
import PictureCard from "../components/picture_card";
import { useState } from "react";

export default function Index() {

    const [showAll, setShowAll] = useState(false)

    const hideAllCallBack = () => {
        setShowAll(false);
    }

    const showAllCallBack = () => {
        setShowAll(true);
    }

    const outerClassName = "mt-2 px-4 h-72 overflow-y-hidden";
    const innerClassName = "flex flex-wrap justify-evenly"

    const AllOuterClassName = "mt-2 px-4";
    const AllInnerClassName = "flex flex-wrap";

    const showAllText = 'show all';
    const hideAllText = 'hide all'

    return (
        <div className="overflow-y-auto">
            <div className=' flex flex-col ' id='main-content'>
                <div className='h-[56px] flex items-center justify-between px-4'>
                    <p className='text-white font-extrabold text-xl'>
                        Spotify PlayLists
                    </p>
                    <button onClick={showAll ? hideAllCallBack : showAllCallBack} className="text-gray-400 text-sm" href="">{showAll ? hideAllText : showAllText}</button>
                </div>
            </div>
            <div className={showAll ? AllOuterClassName : outerClassName}>
                <div className={showAll ? AllInnerClassName : innerClassName}>
                    <PictureCard />
                    <PictureCard />
                    <PictureCard />
                    <PictureCard />
                    <PictureCard />
                    <PictureCard />
                    <PictureCard />
                    <PictureCard />
                    <PictureCard />
                    <PictureCard />
                    <PictureCard />
                    <PictureCard />
                    <PictureCard />
                    <PictureCard />
                </div>
            </div>
            <Footer />
        </div>
    )
}