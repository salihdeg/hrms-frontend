import axios from "axios";

const apiUrl = "http://localhost:8080/api/positions";

export default class PositionService {
  getAll() {
    return axios.get(`${apiUrl}/getall`);
  }
  add(position) {
    return axios.post(`${apiUrl}/add`, position);
  }
}
