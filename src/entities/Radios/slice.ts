import { createSlice } from '@reduxjs/toolkit'

import { RadiosState } from './types'

const initialState: RadiosState = {
	radios: []
}

export const radiosSlice = createSlice({
	name: 'radio',
	initialState,
	reducers: {
		setRadio: (state, action) => {
			state.radios = action.payload
		}
	}
})

export const { setRadio } = radiosSlice.actions

export default radiosSlice.reducer
