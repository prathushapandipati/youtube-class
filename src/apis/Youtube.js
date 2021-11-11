import axios from "axios";

// Todo: Hämta API nykel

const KEY = 'AIzaSyCNRfAKNOm7HDe0pmqn4JBkVQQHNcyEWQk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});

