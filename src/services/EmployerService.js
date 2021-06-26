import axios from "axios";

const apiUrl = "http://localhost:8080/api/employers";

export default class EmployerService {
  getAll() {
    return axios.get(`${apiUrl}/getall`);
  }
}
