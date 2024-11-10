/* eslint-disable no-underscore-dangle */

import axios from 'axios'

export const baseUrl = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

baseUrl.interceptors.request.use(
  (config) => {
    const token = ''
    config.headers.Authorization = token ? `Bearer ${token}` : ''
    config.headers.Accept = 'application/json'

    return config
  },
  (error) => Promise.reject(error),
)
