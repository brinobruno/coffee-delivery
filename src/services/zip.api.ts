import axios from 'axios'
import { DB_URL } from '../constants'

export const db = axios.create({
  baseURL: DB_URL,
})
