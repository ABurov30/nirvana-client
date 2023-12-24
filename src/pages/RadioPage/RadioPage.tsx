import {
	getAllRadiosThunk,
	searchRadioThunk
} from '../../entities/Radios/thunk'
import { useAppDispatch, useAppSelector } from '../../shared/Redux/hooks'
import { useGetAllRadios } from '../../shared/hooks/useGetAllRadios'
import { useUniqCountry } from '../../shared/hooks/useUniqCountry'
import SearchForm from '../../ui/Forms/SearchForm/SearchForm'
import { useUniqGenre } from '../../shared/hooks/useUniqTaqs'
import { useUniqName } from '../../shared/hooks/useUniqName'
import TrackSlider from '../../ui/TrackSlider/TrackSlider'
import ImgSlider from '../../ui/TrackSlider/TrackSlider'
import React, { useLayoutEffect, useState } from 'react'
import TracksRow from '../../ui/TracksRow/TracksRow'
//@ts-ignore
import styles from './RadioPage.module.scss'
import { buttons } from './configs/buttons'

export default function RadioPage(): JSX.Element {
	const countries = useUniqCountry('/radio')
	const genres = useUniqGenre('/radio')
	const names = useUniqName('/radio')

	useLayoutEffect(() => {
		dispatch(getAllRadiosThunk(0))
	}, [])
	const dispatch = useAppDispatch()
	const { radios } = useAppSelector(state => state.radio)
	const [offset, setOffset] = useState(0)

	const fields = [
		{ label: 'Station', name: 'name', options: names },
		{ label: 'Genre', name: 'tags', options: genres },
		{ label: 'Country', name: 'country', options: countries }
	]

	const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = Object.fromEntries(new FormData(e.target))
		dispatch(searchRadioThunk(formData))
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

	console.log()
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
