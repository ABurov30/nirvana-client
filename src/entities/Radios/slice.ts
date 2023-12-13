import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Radio, RadiosState } from './types'

const initialState: RadiosState = {
	radios: [],
	radio: null
}

export const radiosSlice = createSlice({
	name: 'radio',
	initialState,
	reducers: {
		setRadio: (state, action) => {
			state.radios = action.payload
		},
		setOneRadio: (state, action) => {
			state.radio = action.payload
		}
	}
})

export const { setRadio, setOneRadio } = radiosSlice.actions

export default radiosSlice.reducer
