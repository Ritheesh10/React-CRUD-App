import axios from "axios";


export default axios.create({
  baseURL: "http://localhost:5000/",
    headers: {
      "content-type":"application/json"
  }
});