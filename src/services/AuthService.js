import axios from "axios";

const apiUrl = "http://localhost:8080/api/auth";

export default class AuthService {
  employerRegister(employer) {
    return axios.post(`${apiUrl}/employerRegister`, employer);
  }
  login(user) {
    return axios.post(`${apiUrl}/login`, user);
  }
}
