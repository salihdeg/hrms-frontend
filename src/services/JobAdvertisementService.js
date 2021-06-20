import axios from "axios";

const apiUrl = "http://localhost:8080/api/JobAdvertisements";

export default class JobAdvertisementService{
    getAll(){
        return axios.get(`${apiUrl}/getall`);
    }
}