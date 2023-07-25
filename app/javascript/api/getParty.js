import axios from 'axios'
import { baseUrl } from '../consts'

export const getParty = async (id) => {
    return axios.get(`${baseUrl}/parties/${id}`);
}