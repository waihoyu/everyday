import axios from 'axios'

const service = axios.create({
    baseURL: 'http://api-dev',
    timeout: 1000
})
export default service