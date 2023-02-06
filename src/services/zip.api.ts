import axios from 'axios'

const DB_URL = 'https://viacep.com.br/ws/'

export const db = axios.create({
  baseURL: DB_URL,
})
