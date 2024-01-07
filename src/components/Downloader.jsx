import React from 'react'

const Downloader = () => {
    return (
        <div className='h-[100vh] w-[100%] flex justify-center items-center'>
            <div className='grid grid-cols-1 p-4 rounded-md shadow'>
                <h2 className='text-3xl pb-6 pt-4 text-blue-400'>Video Downloader</h2>
                <div className='mb-8'>
                    <form>
                        <div className='w-[400px] h-12 flex rounded-md overflow-hidden border-2 border-blue-500'>
                            <input type="text" placeholder='Paste a Link to Download' className='outline-none w-full px-4 py-3' />
                            <button className='bg-blue-600 px-3 py-2 text-white text-xl font-semibold'>Fetch</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Downloader