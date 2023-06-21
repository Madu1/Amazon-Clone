import axios from "axios";

const instance = axios.create({
     baseURL: "https://us-central1-clone-c9602.cloudfunctions.net/api",

});

export default instance;

//https://us-central1-clone-c9602.cloudfunctions.net/api