import axios from 'axios'

export const RequestTasks = async () => {
    const URL = 'https://jsonplaceholder.typicode.com/todos'
    const { data } = await axios.get(URL)
    return data
}