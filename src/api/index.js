import axios from 'axios'
const BASE_URL = process.env.REACT_APP_BACKEND_URL

const api = axios.create({
	baseURL: BASE_URL,
})

api.interceptors.request.use(function (config) {
	const authToken = localStorage.getItem('authToken')
	if (authToken) {
		config.headers['Authorization'] = `Bearer ${authToken}`
	}
	return config
})

api.interceptors.response.use(
	(response) => response,
	(error) => {
		const errorResponse = error.response
		if (errorResponse && errorResponse.data) {
			if (errorResponse.data.message) {
				if (Array.isArray(errorResponse.data.message)) {
					const message = errorResponse.data.message.join('\r\n')
					return Promise.reject(new Error(message))
				} else {
					return Promise.reject(new Error(errorResponse.data.message))
				}
			} else {
				return Promise.reject(error)
			}
		} else {
			return Promise.reject(error)
		}
	}
)

const PATHS = {
	signup: '/auth/register',
	login: '/auth/login',
	me: '/auth/me',
}

const signUp = (userData) => {
	return api.post(PATHS.signup, userData)
}

const login = (userData) => {
	return api.post(PATHS.login, userData)
}

const fetchAuthUser = () => {
	return api.get(PATHS.me)
}

export const API = {
	signUp,
	login,
	fetchAuthUser,
}
