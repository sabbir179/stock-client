import axios from 'axios'
const BASE_URL = 'http://localhost:8000/api/v1'

const api = axios.create({
	baseURL: BASE_URL
})

const PATHS = {
	signup: '/auth/register',
	signin: '/auth/login',
	me: '/auth/me',
	// notifications: '/notifications',
	// events: '/events'
}

const signUp = (userData) => {
	return api.post(PATHS.signup, userData)
		.then((response) => {
			return response.data
		})
		.catch((e) => {
			return null
		})
}

const signIn = (userData) => {
	return api.post(PATHS.signin, userData)
		.then((response) => {
			return response.data
		})
		.catch((e) => {
			return null
		})
}

const getAuthUser = (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		}
	}
	return api.get(PATHS.me, config)
		.then((response) => {
			return response.data
		}).catch(() => {
			return null
		})
}

const getNotifications = () => {
	const config = {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('authToken')}`,
		}
	}
	return api.get(PATHS.notifications, config)
		.then((response) => {
			return response.data
		}).catch(() => {
			return null
		})
}

const getEvents = (queryParams) => {
	const config = {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('authToken')}`,
		},
		params: {
			...queryParams
		}
	}
	return api.get(PATHS.events, config)
		.then((response) => {
			return response.data
		}).catch(() => {
			return null
		})
}

const createEvent = (eventData) => {
	const config = {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('authToken')}`,
		}
	}
	return api.post(PATHS.events, eventData, config)
		.then((response) => {
			return response.data
		}).catch(() => {
			return null
		})
}

export const API = {
	signUp,
	signIn,
	getAuthUser,
	getNotifications,
	getEvents,
	createEvent
}