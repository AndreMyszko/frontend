import axios from "axios";

const instructor = "user";
const root_url = "http://localhost:8085";
const user_api_url = `${root_url}/${instructor}`;

class UserDataService {
  retriveAllUsers() {
    return axios.get(`${user_api_url}/all-users`);
  }
  deleteUser(user){
    return axios.delete(`${user_api_url}/delete-user/${user}`);
  }
}

export default new UserDataService();
