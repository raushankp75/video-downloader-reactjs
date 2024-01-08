import React from 'react'
import DownloadBtn from '../assets/download.gif'

const Title = () => {
    return (
        <div className='flex justify-center'>
            <div className='py-4 flex items-center gap-3'>
            <div className='p-2 flex w-fit text-3xl font-semibold bg-gradient-to-b from-red-500 from-10% via-red-600 via-30% to-red-400 to-90%'>
                <h1 className='text-white'>You</h1>
                <h1 className='text-red-500 bg-white rounded-xl px-2'>Tube</h1>
            </div>

            <div className='flex gap-2'>
                <h1 className='text-3xl font-semibold text-white'>Downloader</h1>
                <img src={DownloadBtn} alt="DownloadBtn" width={40} height={40} className='bg-none' />
            </div>
        </div>
        </div>
    )
}

export default Title