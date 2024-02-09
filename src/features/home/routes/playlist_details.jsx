import album_cover from '../../../assets/java.png'
import play_icon from '../../../assets/play-button-icon-black.svg'
import OutlinedHeart from '@mui/icons-material/FavoriteBorderOutlined';
import { MoreHoriz } from '@mui/icons-material';
import Divider from '../../login/components/divider';
import TableRowWidget from '../components/table_row_widget';


export default function PlayListDetails() {
    return (
        <div className='overflow-y-auto'>
            <div className="h-[270px] flex flex-row items-center bg-gradient-to-b from-red-900 to-custom-color">
                <div className='h-[230px] w-[230px]  rounded-lg ml-6 shadow-2xl'>
                    <img className=' w-full h-full object-fill rounded-lg ml-0.5  shadow-xl' src={album_cover} alt="" />
                </div>
                <div className='flex flex-col justify-end h-[230px] ml-7'>
                    <p className='text-white pt-2'>Playlist</p>
                    <p className='text-white pt-2 text-5xl font-xtreme-bold'>Lofi Beats</p>
                    <p className='text-gray-300 pt-2 text-sm font'>Soundtrack your cozy dinner with lofi vibes</p>
                    <p className='text-white pt-2 text-sm'>159,239 likes . 134 songs,<span className='text-gray-300'> about 8 hr</span></p>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='h-[90px] flex items-center px-6' >
                    <div className='flex hover:h-13 hover:w-13 hover:bg-green-500  shadow-lg h-12 w-12 rounded-full bg-green-600 items-center justify-center mr-7'>
                        <img className='h-5 w-5 ' src={play_icon} alt="" />
                    </div>
                    <OutlinedHeart fontSize='large' className='text-gray-500 hover:text-white' />
                    <MoreHoriz fontSize='large' className='text-gray-500 hover:text-white ml-5' />
                </div>
                <div className=' mt-2 mx-5'>
                    <div className='h-7 flex px-3'>
                        <div className='w-[40%]  flex items-center'>
                            <p className='text-gray-300 mr-4 text-sm' >#</p>
                            <p className='text-gray-300 mr-4 text-sm'>Title</p>
                        </div>
                        <div className='flex-grow justify-evenly flex items-center mx-2'>
                            <div className=' w-full max-w-[33.3%]'>
                                <p className='text-gray-300 text-sm max-h-[20px] overflow-hidden text-ellipsis whitespace-nowrap'>Album </p>
                            </div>
                            <div className=' w-full flex justify-center max-w-[33.3%]'>
                                <p className='text-gray-300 text-sm max-h-[20px] overflow-hidden text-ellipsis whitespace-nowrap mr-5'>Date Added</p>
                            </div>
                            <div className=' w-full flex justify-center max-w-[33.3%]  border-yellow-500'>
                                <p className='text-gray-300 text-sm max-h-[20px] overflow-hidden text-ellipsis whitespace-nowrap'>Length</p>
                            </div>
                        </div>

                    </div>
                    <div className={`h-[1px] mt-1 bg-slate-500 w-full`} id='divider'>
                    </div>
                    <table className='w-full mt-5'>
                        <tbody>
                            <tr className=''>
                                <TableRowWidget />
                            </tr>
                            <tr className=''>
                                <TableRowWidget />
                            </tr>
                            <tr className=''>
                                <TableRowWidget />
                            </tr>
                            <tr className=''>
                                <TableRowWidget />
                            </tr>
                            <tr className=''>
                                <TableRowWidget />
                            </tr>
                            <tr className=''>
                                <TableRowWidget />
                            </tr>
                            <tr className=''>
                                <TableRowWidget />
                            </tr>
                            <tr className=''>
                                <TableRowWidget />
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}