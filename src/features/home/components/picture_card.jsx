import album_cover from '../../../assets/java.png'
import play_icon from '../../../assets/play-button-icon-black.svg'



export default function PictureCard() {
    return (

        <div className='group hover:bg-custom-color-2 relative bg-custom-color-4  h-273px w-196px flex flex-col items-start pt-3.5 pb-3.5 pl-3.5 rounded-lg'>
            <div className='h-163.63px w-163.63px  rounded-lg '>
                <img className='w-full h-full object-fill rounded-lg' src={album_cover} alt="" />
            </div>
            <p className='text-white mt-2 font-bold '>
                lofi beats
            </p>
            <div className='  w-163.63px max-h-12 overflow-hidden'>
                <p className='text-gray-400 mt-1 text-sm  overflow-ellipsis max-lines-2'>
                    chill beats lofi vibes, new tracks and many more things.
                </p>
            </div>
            <div className='hidden group-hover:flex hover:h-11 hover:w-11 hover:bg-green-500 group-hover:ease-in shadow-lg h-10 w-10 rounded-full bg-green-600 items-center justify-center absolute top-1/2 -translate-x-1/2 -translate-y-3 left-3/4 z-10'>
                <img className='h-5 w-5 ' src={play_icon} alt="" />
            </div>
        </div>
    )
}




