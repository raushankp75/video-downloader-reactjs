import React from 'react'
import DownloadBtn from '../assets/download.gif'

const Title = () => {
    return (
        <div className='flex justify-center'>
            <div className='py-4 flex items-center gap-3'>
            <div className='p-2 flex w-fit md:text-3xl text-2xl font-semibold bg-gradient-to-b from-red-500 from-10% via-red-600 via-30% to-red-400 to-90%'>
                <h1 className='text-white'>You</h1>
                <h1 className='text-red-500 bg-white rounded-xl px-2'>Tube</h1>
            </div>

            <div className='flex gap-2'>
                <h1 className='md:text-3xl text-2xl font-semibold text-white'>Downloader</h1>
                <img src={DownloadBtn} alt="DownloadBtn" className='bg-none md:w-[40px] w-[30px] md:h-[40px] h-[30px]' />
            </div>
        </div>
        </div>
    )
}

export default Title