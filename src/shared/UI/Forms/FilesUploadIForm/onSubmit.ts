import { uploadTrackThunk } from 'entities/Track/thunk'
import { type UploadTrackFrom } from 'entities/Track/types'

import { type onSumbitArgs } from './types'

export function onSubmit({
	e,
	dispatch,
	trackName,
	track,
	img,
	artist
}: onSumbitArgs) {
	e.preventDefault()

	const formData = new FormData()

	formData.append('cover', img!)

	formData.append('track', track!)

	formData.append('trackName', trackName)
	formData.append('artist', artist)
	dispatch(uploadTrackThunk(formData as unknown as UploadTrackFrom))
}
