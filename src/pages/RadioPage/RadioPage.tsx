import {
	getAllRadiosThunk,
	searchRadioThunk
} from '../../entities/Radios/thunk'
import { useAppDispatch, useAppSelector } from '../../shared/Redux/hooks'
import SearchForm from '../../ui/Forms/SearchForm/SearchForm'
import TrackSlider from '../../ui/TrackSlider/TrackSlider'
import React, { useLayoutEffect, useState } from 'react'
import TracksRow from '../../ui/TracksRow/TracksRow'
//@ts-ignore
import styles from './RadioPage.module.scss'
import { buttons } from './configs/buttons'
import { useAutocomplete } from '../../shared/hooks/useAutocomlete'

export default function RadioPage(): JSX.Element {
	const user = useAppSelector(state => state.user)
	const countries = useAutocomplete(`/radio/uniqCountry`)
	const genres = useAutocomplete(`/radio/uniqGenre`)
	const stations = useAutocomplete(`/radio/uniqNames`)

	useLayoutEffect(() => {
		dispatch(getAllRadiosThunk(0))
	}, [])
	const dispatch = useAppDispatch()
	const { radios } = useAppSelector(state => state.radio)
	const [offset, setOffset] = useState(0)

	const fields = [
		{ label: 'Station', name: 'name', options: stations },
		{ label: 'Genre', name: 'tags', options: genres },
		{ label: 'Country', name: 'country', options: countries }
	]

	const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = Object.fromEntries(new FormData(e.target))
		if (!formData.name && !formData.tags && !formData.country) {
			dispatch(getAllRadiosThunk(0, user.id))
		} else {
			dispatch(searchRadioThunk(formData, user.id))
		}
	}

	const loadPrevRadios = () => {
		if (offset >= 5) {
			setOffset(prev => prev - 5)
			dispatch(getAllRadiosThunk(offset))
		} else {
			dispatch(getAllRadiosThunk(0))
		}
	}

	const loadNextRadios = () => {
		setOffset(prev => prev + 5)
		dispatch(getAllRadiosThunk(offset))
	}
	return (
		<div className={styles.radioPage}>
			<TrackSlider tracks={radios} />
			<SearchForm
				fields={fields}
				buttons={buttons}
				onSubmit={searchHandler}
			/>
			<TracksRow
				tracks={radios}
				loadNext={loadNextRadios}
				loadPrev={loadPrevRadios}
			/>
		</div>
	)
}
