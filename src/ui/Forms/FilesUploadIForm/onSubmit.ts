import { setNotification } from '../../../entities/Notification/slice'
import { Severity } from '../../../entities/Notification/types'
import { uploadTrackThunk } from '../../../entities/Track/thunk'
import { validateFileExtension } from '../../../shared/utils/validateFileExtensio'

export function onSubmit({ e, dispatch, trackName, track, img, artist }) {
	e.preventDefault()

	const formData = new FormData()

	formData.append('cover', img)

	formData.append('track', track)

	console.log(track, img, 'track', 'img')

	formData.append('trackName', trackName)
	formData.append('artist', artist)
	console.log(formData)
	dispatch(uploadTrackThunk(formData))
}
