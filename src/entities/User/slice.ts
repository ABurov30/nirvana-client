import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { UserStatus, UserType } from './types'

const initialState: UserType = {
	status: UserStatus.fetching
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserType>) => action.payload,
		logoutUser: state => ({
			status: UserStatus.guest,
			id: null,
			score: null
		})
	}
})

export const { setUser, logoutUser } = userSlice.actions

export default userSlice.reducer
