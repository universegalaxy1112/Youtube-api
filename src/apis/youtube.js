import axios from "axios";
// import KEY from "../apiKey";
const KEY = "AIzaSyAZFEie_d5QVqPZx0cP8hHioLNU9nj5XT8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 7,
    key: KEY,
  },
});
