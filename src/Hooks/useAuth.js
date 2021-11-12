import { useSelector, useDispatch } from 'react-redux'
import { selectAuthState, setAuthUser } from '../redux/slices/auth.slice'

export const useAuth = () => {
	const { authUser, isFetching } = useSelector(selectAuthState)
	const dispatch = useDispatch()

	const logout = () => {
		dispatch(setAuthUser(null))
		localStorage.removeItem('authToken')
	}
	return {
		authUser,
		isFetchingAuthUser: isFetching,
		logout,
	}
}
