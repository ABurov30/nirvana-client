import {
	getAllRadiosThunk,
	searchRadioThunk
} from '../../entities/Radios/thunk'
import { useAppDispatch, useAppSelector } from '../../shared/Redux/hooks'
import React, { useCallback, useLayoutEffect, useState } from 'react'
//@ts-ignore
import styles from './RadioPage.module.scss'
import { buttons } from './configs/buttons'
import { useAutocomplete } from '../../shared/hooks/useAutocomlete'
import { SearchForm } from '../../UI/Forms/SearchForm/SearchForm'
import { TracksRow } from '../../UI/TracksRow/TracksRow'
import { TrackSlider } from '../../UI/TrackSlider/TrackSlider'
import { changeTheme } from '../../entities/App/slice'

export default function RadioPage(): JSX.Element {
	const user = useAppSelector(state => state.user)
	const { options: countries, setOptions: setCountries } =
		useAutocomplete(`/radio/uniqCountry`)
	const [countryInput, setCountryInput] = useState('')
	const { options: genres, setOptions: setGenres } =
		useAutocomplete(`/radio/uniqGenre`)
	const [genreInput, setGenreInput] = useState('')
	const { options: stations, setOptions: setStations } =
		useAutocomplete(`/radio/uniqNames`)
	const [stationInput, setStationsInput] = useState('')

	useLayoutEffect(() => {
		dispatch(getAllRadiosThunk(0))
	}, [])
	const dispatch = useAppDispatch()
	const { radios } = useAppSelector(state => state.radio)
	const [offset, setOffset] = useState(0)
	const URL = '/radio'
	const fields = [
		{
			label: 'Station',
			name: 'name',
			value: stationInput,
			onChange: setStationsInput,
			path: `${URL}/intualSearchName`,
			options: stations,
			setOptions: setStations
		},
		{
			label: 'Genre',
			name: 'tags',
			value: genreInput,
			onChange: setGenreInput,
			path: `${URL}/intualSearchGenres`,
			options: genres,
			setOptions: setGenres
		},
		{
			label: 'Country',
			name: 'country',
			value: countryInput,
			onChange: setCountryInput,
			path: `${URL}/intualSearchCountry`,
			options: countries,
			setOptions: setCountries
		}
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
				title={'Your weekly top stations'}
				tracks={radios}
				loadNext={loadNextRadios}
				loadPrev={loadPrevRadios}
			/>
		</div>
	)
}
