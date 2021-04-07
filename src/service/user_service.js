import axios from "axios";

const instructor = "user";
const root_url = "http://localhost:8080";
const user_api_url = `${root_url}/${instructor}`;

class UserDataService {
  retriveAllUsers() {
    return axios.get(`${user_api_url}/all-users`);
  }
  deleteUser(name, id){
    return axios.delete(`${user_api_url}/delete-user=${id}`);
  }
  addUser(user) {
    return axios.post(`${user_api_url}/insert-user=${user}`);
  }
}

export default new UserDataService();
