import React, { useState } from 'react'
import { fetchVideoDetails } from '../services/ApiServices'
import VideoDetails from '../components/VideoDetails'
import Loader from '../components/Loader'
import FormInput from '../components/FormInput'
import Title from '../components/Title'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Downloader = () => {

    const [link, setLink] = useState('')
    const [videoDetailsData, setVideoDetailsData] = useState('')
    const [quality, setQuality] = useState('')
    const [loader, setLoader] = useState(false)


    const submitHandler = async (e) => {
        e.preventDefault();

        // if(!link){
        //     toast.warn('Enter a YouTube Link to Download')
        // }

        try {
            setLoader(true)
            const response = await fetchVideoDetails(link)
            setLoader(false)
            console.log(response, 15)
            setVideoDetailsData(response.videoDetails)
            setQuality(response.videoDetails)
            toast.success(response.message)
        } catch (error) {
            if(error.message){
                toast.warn('Enter Valid Link')
                setLoader(false)
            }
        }
    }



    return (
        <div className='md:w-[500px] w-full flex flex-col gap-5 p-4 rounded-md'>
            <Title />
            <FormInput submitHandler={submitHandler} setLink={setLink} />
            {!loader ? videoDetailsData && <VideoDetails videoDetailsData={videoDetailsData} /> : <Loader />}
        </div>
    )
}

export default Downloader