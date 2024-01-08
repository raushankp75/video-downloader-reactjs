import { myAxios } from "./helper";


export const fetchVideoDetails = async (link) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const videoId = link.split('https://youtu.be/')[1]
    // console.log(videoId)

    const { data } = await myAxios.get(`/video/details/${videoId}`, config)
    return data
}