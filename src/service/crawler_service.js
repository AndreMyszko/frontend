import axios from 'axios';

const instructor = "crawler";
const root_url = "http://localhost:8080";
const crawler_api_url = `${root_url}/${instructor}`;

class CrawlerService {
    //retorna toda lista do -> db_schema.[tabela_do_crawler(varchar/string)]
    retriveAllData() {
        return axios.get(`${crawler_api_url}/listAll`);
    }
}

export default new CrawlerService();