import axios from "axios"
import env from "dotenv"
const params = {
    headers : {
        Authorization: `Bearer ${process.env.REACT_APP_STRAPI_API_TOKEN}`
    }
}

export const fetchData = async (url) => {
    try{
        const {data} = await axios.get(
            process.env.REACT_APP_DEV_URL+url,
            params
        );
        return data;
    } catch(error){
        console.log(error);
        return error;
    }
}