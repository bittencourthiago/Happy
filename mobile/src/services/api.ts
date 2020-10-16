import axios from 'axios'

const api =  axios.create({
    baseURL:'http://192.168.178.194:3333',
})

export default api