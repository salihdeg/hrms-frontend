import axios from "axios";

const apiUrl = "http://localhost:8080/api/departments";

export default class DepartmentService {
  getAll() {
    return axios.get(`${apiUrl}/getall`);
  }
}
