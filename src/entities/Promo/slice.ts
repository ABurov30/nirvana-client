import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { Promo, PromoState } from './types'

const initialState: PromoState = {
	promo: []
}

export const promoSlice = createSlice({
	name: 'promo',
	initialState,
	reducers: {
		setPromo: (state, action: PayloadAction<Promo[]>) => {
			state.promo = action.payload
		}
	}
})

export const { setPromo } = promoSlice.actions

export default promoSlice.reducer
