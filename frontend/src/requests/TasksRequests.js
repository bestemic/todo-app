import axios from "axios";

const TASKS_API = "http://localhost:8080/api/tasks"

export const getTasks = () => {
    return axios.get(TASKS_API + "/getAll");
}