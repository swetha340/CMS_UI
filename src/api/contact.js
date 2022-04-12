import axios from "axios";

export default axios.create({
    baseURL:"https://springboot-contact.herokuapp.com/api/v1/"
})