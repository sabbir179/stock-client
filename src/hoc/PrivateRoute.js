import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const PrivateRoute = ({ roles, ...restProps }) => {
	const { authUser, isFetchingAuthUser } = useAuth()
	if (isFetchingAuthUser) {
		return <div>Loading...</div>
	}
	if (!authUser) {
		return <Redirect to={'/login'} />
	}
	if (!roles.includes(authUser.role)) {
		return <Redirect to={'/'} />
	}
	return <Route {...restProps} />
}

PrivateRoute.defaultProps = {
	roles: [],
}
