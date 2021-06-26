import axios from "axios";

const apiUrl = "http://localhost:8080/api/schools";

export default class SchoolService {
  getAll() {
    return axios.get(`${apiUrl}/getall`);
  }
}
