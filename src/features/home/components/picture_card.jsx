import album_cover from '../../../assets/java.png'
import play_icon from '../../../assets/play-button-icon-black.svg'
import { useState } from 'react';
import CustomizedDialogs from '../../mock_tests.jsx/alert_dialog';



export default function PictureCard() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
      };

    return (

        <div className='mr-3.5 mb-4 group hover:bg-custom-color-2 relative bg-custom-color-4  h-273px w-[190px] flex flex-col items-start pt-3.5 pb-3.5 pl-3.5 rounded-lg'>
            <div className='h-[160px] w-[160px]  rounded-lg '>
                <img className='w-full h-full object-fill rounded-lg ml-0.5' src={album_cover} alt="" />
            </div>
            <p className='text-white mt-3 font-bold ml-0.5'>
                lofi beats
            </p>
            <div className='  w-163.63px overflow-hidden'>
                <p className='text-gray-400 mt-1 text-sm  overflow-ellipsis max-lines-2 ml-o.5'>
                    chill beats lofi vibes, new tracks and many more things.
                </p>
            </div>
            <button onClick={handleClickOpen} className='hidden group-hover:flex hover:h-11 hover:w-11 hover:bg-green-500 group-hover:ease-in shadow-lg h-10 w-10 rounded-full bg-green-600 items-center justify-center absolute top-1/2 -translate-x-1/2 -translate-y-3 left-3/4 z-10'>
                <img className='h-5 w-5 ' src={play_icon} alt="" />
            </button>
            <CustomizedDialogs alertState={open} onClose={handleClose} />
        </div>
    )
}




