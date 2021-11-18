import { Redirect, Route, useLocation } from 'react-router-dom'
import { Routes } from '../constants'
import { useAuth } from '../hooks/useAuth'

export const PrivateRoute = ({ roles, ...restProps }) => {
	const { authUser, isFetchingAuthUser } = useAuth()
	const { pathname } = useLocation()
	if (isFetchingAuthUser) {
		return <div>Loading...</div>
	}
	if (!authUser) {
		return <Redirect to={Routes.LOGIN} />
	}
	if (!roles.includes(authUser.role)) {
		return <Redirect to={{ pathname }} />
	}
	return <Route {...restProps} />
}

PrivateRoute.defaultProps = {
	roles: [],
}
