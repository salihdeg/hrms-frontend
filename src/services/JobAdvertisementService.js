import axios from "axios";

const apiUrl = "http://localhost:8080/api/JobAdvertisements";

export default class JobAdvertisementService{
    getAll(){
        return axios.get(`${apiUrl}/getall`);
    }

    getRandomTen(){
        return axios.get(`${apiUrl}/getrandomten`);
    }

    getById(id){
        return axios.get(`${apiUrl}/getbyid?id=${id}`)
    }

    add(jobAdvertisement){
        return axios.post(`${apiUrl}/add`,jobAdvertisement);
    }
}