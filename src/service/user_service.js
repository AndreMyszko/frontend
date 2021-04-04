import axios from 'axios';

const serve = "user";
const root_url = "http://localhost:8085";
const user_api_url = '${root_url}/{serve}';

class UserDataService{
    retriveAllUsers(){
        return axios.get('${user_api_url}/all-users}');
    }

}

export default UserDataService();


