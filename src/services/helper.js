import axios from "axios";

export const BASE_URL ='https://youtube-downloader-ucfl.onrender.com';
// export const BASE_URL='http://localhost:8000/api';

export const myAxios=axios.create({
    baseURL:BASE_URL
})