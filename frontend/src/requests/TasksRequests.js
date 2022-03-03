import axios from "axios";

export const getTasks = () => {
    return axios.get("http://localhost:8080/api/tasks/getAll");
}