import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API } from '../../api'

const initialState = {
	authUser: null,
	isFetching: false,
}

export const fetchAuthUser = createAsyncThunk(
	'auth/fetchAuthUser',
	async () => {
		const response = await API.fetchAuthUser()
		return response.data
	}
)

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthUser: (state, action) => {
			state.authUser = action.payload
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(fetchAuthUser.pending, (state) => {
				state.isFetching = true
			})
			.addCase(fetchAuthUser.fulfilled, (state, action) => {
				state.isFetching = false
				state.authUser = action.payload
			})
			.addCase(fetchAuthUser.rejected, (state) => {
				state.isFetching = false
				state.authUser = null
			})
	},
})

export const { setAuthUser } = authSlice.actions

export const selectAuthState = (state) => state.auth
export const selectAuthUser = (state) => state.auth.authUser
export const selectIsFetchingAuthUser = (state) => state.auth.isFetching

export default authSlice.reducer
