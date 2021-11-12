import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const PublicRoute = (props) => {
	const { authUser } = useAuth()

	if (authUser) {
		if (authUser.role === 'ADMIN') {
			return <Redirect to={'/admindashboard'} />
		}
		if (authUser.role === 'TRADER') {
			return <Redirect to={'/homeafterlogin'} />
		}
	}
	return <Route {...props} />
}
