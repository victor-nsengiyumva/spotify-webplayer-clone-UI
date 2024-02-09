import album_cover from '../../../assets/java.png'



export default function TableRowWidget() {
    return (
        <div className='h-[56px] flex px-3'>
            <div className='w-[40%]  flex items-center'>
                <p className='text-gray-300 mr-4 text-sm' >1</p>
                <div className="flex">
                    <img className='w-[50px] h-[50px] rounded-sm' src={album_cover} alt="" />
                    <div className='flex flex-col ml-3 justify-center'>
                        <p className='text-white overflow-hidden text-ellipsis whitespace-nowrap max-w-[220px]'>Ludlow</p>
                        <p className='text-gray-300 text-sm overflow-hidden text-ellipsis whitespace-nowrap max-w-[220px]'>James Jackson lofi</p>
                    </div>
                </div>
            </div>
            <div className='flex-grow justify-evenly flex items-center mx-2'>
                <div className=' w-full max-w-[33.3%]'>
                    <p className='text-gray-300 text-sm max-h-[20px] overflow-hidden text-ellipsis whitespace-nowrap'>Easy Dreamin' </p>
                </div>
                <div className=' w-full flex justify-center max-w-[33.3%]'>
                    <p className='text-gray-300 text-sm max-h-[20px] overflow-hidden text-ellipsis whitespace-nowrap'>6 hours ago</p>
                </div>
                <div className=' w-full flex justify-end max-w-[33.3%]'>
                    <p className='text-gray-300 text-sm max-h-[20px] overflow-hidden text-ellipsis whitespace-nowrap'>3:03</p>
                </div>
            </div>
        </div>
    )
}