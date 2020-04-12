import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 5ZHV9HF9SEsqKBBuK0vjdVJRS2RuImU8GWiIuiJy9Nc"
    }
});