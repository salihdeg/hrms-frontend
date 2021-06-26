import axios from "axios";

const apiUrl = "http://localhost:8080/api/languages";

export default class LanguageService {
  getAll() {
    return axios.get(`${apiUrl}/getall`);
  }
}
