import axios from "axios";

axios.defaults.baseURL = 'https://cooking-api-pp5-c09a661185b7.herokuapp.com/';
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;