import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Routes, UserRole } from '../../constants'
import { useAuth } from '../../hooks/useAuth'
import Login from './Login'
import SignUp from './SignUp'

const AuthPage = () => {
	const { authUser, isFetchingAuthUser } = useAuth()
	if (isFetchingAuthUser) {
		return null
	}
	if (authUser) {
		if (authUser.role === UserRole.ADMIN) {
			return <Redirect to='/admin' />
		}
		if (authUser.role === UserRole.TRADER) {
			console.log(authUser)
			return <Redirect to='/trader' />
		}
	}
	return (
		!authUser ?
			<Switch>
				<Route exact path={Routes.LOGIN} component={ Login } />
				<Route exact path={Routes.SIGN_UP} component={ SignUp } />
				<Redirect from="/auth" to={Routes.LOGIN} />
			</Switch>
			:
			null
	)
}

export default AuthPage
