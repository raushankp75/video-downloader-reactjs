import { myAxios, BASE_URL } from "./helper";


export const fetchVideoDetails = async (link) => {
    // const config = {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }

    const videoId = link.split('https://youtu.be/')[1]
    // console.log(videoId)

    const { data } = await myAxios.get(`/video/details/${videoId}`)
    return data
}

export const downloadVideo = (link, quality) => {
    const videoId = link.split('https://youtu.be/')[1]
    // console.log(videoId)
    // console.log(quality)

    const url = `${BASE_URL}/video/download?id=${videoId}&videoQuality=${quality}`
    window.location.href = url
}