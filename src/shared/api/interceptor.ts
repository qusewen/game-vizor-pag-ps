/* eslint-disable no-underscore-dangle */
import axios from 'axios'

export const baseUrl = axios.create({
  baseURL: '/api',
})

const getCookie = (name: string) => {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}`)
    if(parts.length === 2) return parts.pop()?.split(';').shift()

}

baseUrl.interceptors.request.use(
  (config) => {
    const token = getCookie('access_token') || getCookie('refresh_token') || ''
    config.headers.Authorization = token ? `Bearer ${token}` : ''
    config.headers.Accept = 'application/json'
    return config
  },
  (error) => Promise.reject(error),
)
