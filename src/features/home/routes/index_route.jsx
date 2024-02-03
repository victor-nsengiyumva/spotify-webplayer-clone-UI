import PictureCard from "../components/picture_card";

export default function Index() {
    return (
        <>
            <div className=' flex flex-col ' id='main-content'>
                <div className='h-[56px] flex items-center justify-between px-4'>
                    <p className='text-white font-extrabold text-xl'>
                        Spotify PlayLists
                    </p>
                    <a className="text-gray-400 text-sm" href="">show all</a>
                </div>
            </div>
            <div className="mt-2 px-4 grid gap-x-4 gap-y-4 grid-cols-3 h-72 mr-4 justify-evenly overflow-hidden">
                <PictureCard/>
                <PictureCard/>
                <PictureCard/>        
            </div>
        </>
    )
}