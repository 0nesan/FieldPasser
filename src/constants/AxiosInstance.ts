import axios from "axios"

const BASE_URL = import.meta.env.VITE_BASE_URL

export const PUBLICAPI = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
})