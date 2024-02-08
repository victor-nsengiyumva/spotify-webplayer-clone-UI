import album_cover from '../../../assets/java.png'


export default function PlayListDetails() {
    return (
        <div className="h-[270px] flex flex-row items-center bg-gradient-to-b from-red-900 to-black">
            <div className='h-[230px] w-[230px]  rounded-lg ml-6 shadow-2xl'>
                <img className=' w-full h-full object-fill rounded-lg ml-0.5  shadow-xl' src={album_cover} alt="" />
            </div>
            <div className='flex flex-col justify-end h-[230px] ml-7'>
                <p className='text-white pt-2'>Playlist</p>
                <p className='text-white pt-2 text-5xl font-xtreme-bold'>Jazz in the Background</p>
                <p className='text-gray-300 pt-2 text-sm font'>Soundtrack your cozy dinner with lofi vibes</p>
                <p className='text-white pt-2 text-sm'>159,239 likes . 134 songs,<span className='text-gray-300'> about 8 hr</span></p>

            </div>
        </div>
    )
}