import { UnknownAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { getAllRadiosThunk, searchRadioThunk } from 'entities/Radios/thunk'
import { SearchRadioForm } from 'entities/Radios/types'
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
		name: form.radio.value,
		tags: form.tags.value,
		country: form.country.value
	}
	if (!formData.name && !formData.tags && !formData.country) {
		dispatch(getAllRadiosThunk(0, (user as unknown as ActiveType).id))
	} else {
		dispatch(
			searchRadioThunk(
				formData as SearchRadioForm,
				(user as unknown as ActiveType).id
			)
		)
	}
}
