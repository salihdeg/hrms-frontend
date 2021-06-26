import axios from "axios";

const apiUrl = "http://localhost:8080/api/workers";

export default class WorkerService {
  getAll() {
    return axios.get(`${apiUrl}/getall`);
  }
}
