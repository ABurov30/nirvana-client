import {
	getAllRadiosThunk,
	searchRadioThunk
} from '../../entities/Radios/thunk'
import { useAppDispatch, useAppSelector } from '../../services/Redux/hooks'
import SearchForm from '../../ui/Forms/SearchForm/SearchForm'
import { useGetAllRadios } from '../../hooks/useGetAllRadios'
import { useUniqCountry } from '../../hooks/useUniqCountry'
import { useUniqGenre } from '../../hooks/useUniqTaqs'
import { useUniqName } from '../../hooks/useUniqName'
import TracksRow from '../../ui/TracksRow/TracksRow'
import ImgSlider from '../../ui/ImgSlider/ImgSlider'
//@ts-ignore
import styles from './RadioPage.module.scss'
import { buttons } from './configs/buttons'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'

export default function RadioPage(): JSX.Element {
	const countries = useUniqCountry()
	const genres = useUniqGenre()
	const names = useUniqName()
	useGetAllRadios()
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
		console.log(formData, 'form data')
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
			<ImgSlider promos={radios} />
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
