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
		// @ts-ignore
		setUser: (state, action: PayloadAction<UserType>) => {
			return action.payload
		},
		// @ts-ignore
		logoutUser: (state, action: PayloadAction<{}>) => ({
			status: UserStatus.guest
		})
	}
})

export const { setUser, logoutUser } = userSlice.actions

export default userSlice.reducer
