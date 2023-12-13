import type { PayloadAction } from '@reduxjs/toolkit'
import { ImageState, ImageType } from './types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: ImageState = {
	images: []
}

export const imagesSlice = createSlice({
	name: 'images',
	initialState,
	reducers: {
		setImages: (state, action: PayloadAction<ImageType[]>) => {
			state.images = action.payload
		}
	}
})

export const { setImages } = imagesSlice.actions

export default imagesSlice.reducer
