import axios from "axios";

const apiUrl = "http://localhost:8080/api/faculties";

export default class FacultyService {
  getAll() {
    return axios.get(`${apiUrl}/getall`);
  }
}
