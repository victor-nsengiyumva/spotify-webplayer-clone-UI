import album_cover from '../../../assets/java.png'
import play_icon from '../../../assets/play-button-icon-black.svg'
import OutlinedHeart from '@mui/icons-material/FavoriteBorderOutlined';
import { MoreHoriz } from '@mui/icons-material';
import { FaHeart } from 'react-icons/fa';
import Divider from '../../login/components/divider';


export default function PlayListDetails() {
    return (
        <div className='overflow-y-auto'>
            <div className="h-[270px] flex flex-row items-center bg-gradient-to-b from-red-900 to-custom-color">
                <div className='h-[230px] w-[230px]  rounded-lg ml-6 shadow-2xl'>
                    <img className=' w-full h-full object-fill rounded-lg ml-0.5  shadow-xl' src={album_cover} alt="" />
                </div>
                <div className='flex flex-col justify-end h-[230px] ml-7'>
                    <p className='text-white pt-2'>Playlist</p>
                    <p className='text-white pt-2 text-5xl font-xtreme-bold'>Lofi Vibes</p>
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
                    <div className='h-7  flex px-3'>
                        <div className='w-[40%]  flex items-center'>
                            <p className='text-gray-300 mr-4 text-sm' >#</p>
                            <p className='text-gray-300 text-sm'>Title</p>
                        </div>
                        <div className='flex-grow justify-between flex items-center mx-2'>
                            <p className='text-gray-300 text-sm'>Album</p>
                            <p className='text-gray-300 text-sm'>Date Added</p>
                            <p className='text-gray-300 text-sm'>Length</p>
                        </div>
                    </div>
                    <Divider className={`bg-slate-500 w-full mt-0 mb-0`}/>
                    <table className='w-full mt-5 mx-5'>
                        
                        <tr>
                            <td>John</td>
                            <td>30</td>
                            <td>USA</td>
                        </tr>
                        <tr>
                            <td>Mary</td>
                            <td>25</td>
                            <td>Canada</td>
                        </tr>
                        <tr>
                            <td>Mary</td>
                            <td>25</td>
                            <td>Canada</td>
                        </tr><tr>
                            <td>Mary</td>
                            <td>25</td>
                            <td>Canada</td>
                        </tr><tr>
                            <td>Mary</td>
                            <td>25</td>
                            <td>Canada</td>
                        </tr><tr>
                            <td>Mary</td>
                            <td>25</td>
                            <td>Canada</td>
                        </tr><tr>
                            <td>Mary</td>
                            <td>25</td>
                            <td>Canada</td>
                        </tr>
                        <tr>
                            <td>David</td>
                            <td>40</td>
                            <td>UK</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}