import { UnknownAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { getTracksThunk, searchTracksThunk } from 'entities/Track/thunk'
import { ActiveType } from 'entities/User/types'

import { RootState } from 'shared/Redux/store'

export const searchHandler = (
	e: React.FormEvent<HTMLFormElement>,
	dispatch: ThunkDispatch<RootState, undefined, UnknownAction>,
	user: ActiveType
) => {
	e.preventDefault()

	const form = e.currentTarget
	const formData = {
		trackTitle: form.trackTitle.value,
		artist: form.artist.value
	}
	if (!formData.trackTitle && !formData.artist) {
		dispatch(getTracksThunk(0, (user as unknown as ActiveType).id))
	} else {
		dispatch(
			searchTracksThunk(formData, (user as unknown as ActiveType).id)
		)
	}
}
