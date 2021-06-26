import axios from "axios";

const apiUrl = "http://localhost:8080/api/cities";

export default class CityService {
  getAll() {
    return axios.get(`${apiUrl}/getall`);
  }
}
