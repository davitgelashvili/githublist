import axios from "axios"

const url = 'https://api.github.com'

const getUsers = async (path:any) => {
    const res = await axios.get(url + path)
    return res?.data
}

export default getUsers