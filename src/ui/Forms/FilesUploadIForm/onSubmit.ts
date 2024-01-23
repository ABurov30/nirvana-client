import { uploadTrackThunk } from '../../../entities/Track/thunk'
import { onSumbitArgs } from './types'

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

	formData.append('cover', img as File)

	formData.append('track', track as File)

	formData.append('trackName', trackName)
	formData.append('artist', artist)
	dispatch(uploadTrackThunk(formData))
}
