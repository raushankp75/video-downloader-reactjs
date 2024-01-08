import React from 'react'
import DownloadBtn from '../assets/download.gif'


const VideoDetails = ({ videoDetailsData, setQuality, downloadd, downloadLoader }) => {

    return (
        <div>
            <img src={videoDetailsData.thumbnailUrl} alt="videoDetailsData" />
            <h1 className='text-[#ddd9d9] font-semibold'>{videoDetailsData.title.slice(0, 100)}</h1>
            <div className='py-2 flex gap-5 items-center'>
                <select onChange={(e) => setQuality(e.target.value)} className='outline-none border-red-800 px-3 py-2 rounded-md text-xl font-semibold w-fit h-fit'>
                    {
                        videoDetailsData.videoQuality.length > 0 && videoDetailsData.videoQuality.map((item, index) => (
                            <option
                                key={index}
                                value={item}
                            >{item}p
                            </option>
                        ))
                    }
                </select>

                <button
                    onClick={downloadd}
                    className="w-fit uppercase rounded-md tracking-wide font-semibold text-lg text-white px-5 py-2 outline-none hover:scale-105 duration-300 hover:transition-all ease-in-out hover:shadow-xl hover:drop-shadow-xl active:scale-75 active:shadow-none bg-gradient-to-r from-red-400 from-10% via-red-500 via-30% to-red-400 to-90%"
                >{downloadLoader ? <img src={DownloadBtn} alt="DownloadBtn" className='bg-none w-[30px] h-[30px]' /> : 'Download'}
                </button>
            </div>
        </div>
    )
}

export default VideoDetails