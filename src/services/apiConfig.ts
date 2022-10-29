import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'https://www.getonbrd.com/api/v0',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

export default axiosClient
