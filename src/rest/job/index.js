import axios from "axios";

const BASE_API_URL = "http://localhost:8080/api/v1"

function getJobs() {
    return axios.get(`${BASE_API_URL}/job`)
}

function getJob(id) {
    return axios.get(`${BASE_API_URL}/job/${id}`)
}

function createJob(id, data) {
    return axios.post(`${BASE_API_URL}/job`, data)
}

const rest = {
    getJobs,
    getJob,
    createJob
}
export default rest


