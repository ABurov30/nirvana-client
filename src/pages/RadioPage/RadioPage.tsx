import { useLayoutEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'

import { searchHandler } from './handlers/searchHandler'

import { getAllRadiosThunk } from 'entities/Radios/thunk'
import { ActiveType } from 'entities/User/types'

import { useAppDispatch, useAppSelector } from 'shared/Redux/hooks'
import { SearchForm } from 'shared/UI/Forms/SearchForm/SearchForm'
import { TrackSlider } from 'shared/UI/TrackSlider/TrackSlider'
import { TracksRow } from 'shared/UI/TracksRow/TracksRow'
import { useAutocomplete } from 'shared/hooks/useAutocomplete/useAutocomlete'
import { useGetLoaders } from 'shared/hooks/useGetLoaders/useGetLoaders'

import { buttons } from './configs/buttons'

import styles from './RadioPage.module.scss'

export default function RadioPage(): JSX.Element {
	const user = useAppSelector(state => state.user)
	const navigate = useNavigate()
	if (!(user as unknown as ActiveType).isAdmin) navigate('/')

	const { options: countries, setOptions: setCountries } =
		useAutocomplete(`/radio/uniqCountry`)
	const [countryInput, setCountryInput] = useState('')
	const { options: genres, setOptions: setGenres } =
		useAutocomplete(`/radio/uniqGenre`)
	const [genreInput, setGenreInput] = useState('')
	const { options: stations, setOptions: setStations } =
		useAutocomplete(`/radio/uniqNames`)
	const [stationInput, setStationsInput] = useState('')
	const { t } = useTranslation()

	useLayoutEffect(() => {
		dispatch(getAllRadiosThunk(0, (user as unknown as ActiveType).id))
	}, [])
	const dispatch = useAppDispatch()
	const { radios } = useAppSelector(state => state.radio)
	const [offset, setOffset] = useState(0)
	const URL = '/radio'
	const fields = [
		{
			label: t('RadioPage.station'),
			name: 'radio',
			value: stationInput,
			onChange: setStationsInput,
			path: `${URL}/intualSearchName`,
			options: stations,
			setOptions: setStations
		},
		{
			label: t('RadioPage.genre'),
			name: 'tags',
			value: genreInput,
			onChange: setGenreInput,
			path: `${URL}/intualSearchGenres`,
			options: genres,
			setOptions: setGenres
		},
		{
			label: t('RadioPage.country'),
			name: 'country',
			value: countryInput,
			onChange: setCountryInput,
			path: `${URL}/intualSearchCountry`,
			options: countries,
			setOptions: setCountries
		}
	]

	const { loadNext: loadNextRadios, loadPrev: loadPrevRadios } =
		useGetLoaders({
			offset,
			setOffset,
			dispatch,
			thunk: getAllRadiosThunk,
			user: user as unknown as ActiveType
		})

	return (
		<div className={styles.radioPage}>
			<TrackSlider tracks={radios} />
			<SearchForm
				fields={fields}
				buttons={buttons()}
				onSubmit={e =>
					searchHandler(e, dispatch, user as unknown as ActiveType)
				}
			/>
			<TracksRow
				title={t('RadioPage.yourWeeklyTopStations')}
				tracks={radios}
				loadNext={loadNextRadios}
				loadPrev={loadPrevRadios}
			/>
		</div>
	)
}
