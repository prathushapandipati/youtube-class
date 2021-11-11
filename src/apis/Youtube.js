import axios from "axios";

// Todo: Hämta API nykel

const KEY = ''; //Add your Youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});

