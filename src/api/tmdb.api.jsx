import axios from "axios"; 


export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
    
    },
    params: {
        api_key: '8f781d70654b5a6f2fa69770d1d115a3'
    }
})