import axios from "axios";

// change base url with host
export default axios.create({
  baseURL: "https://patchwork-full.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});