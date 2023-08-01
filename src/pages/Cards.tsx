import {
	getAllRadiosThunk,
	searchRadioThunk
} from '../redux/slices/radios/radiosThunk'
import { useAppSelector } from '../redux/hooks'
import React, { lazy, useEffect } from 'react'
import { useDispatch } from 'react-redux'
const MediaCard = lazy(() => import('../ui/MediaCard'))
const InputName = lazy(() => import('../ui/inputName'))
const InputGenre = lazy(() => import('../ui/InputGenre'))
const InputCountry = lazy(() => import('../ui/inputCountry'))

export default function Cards(): JSX.Element {
	const { radios } = useAppSelector(state => state.radio)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAllRadiosThunk())
	}, [])

	const searchHandler = e => {
		e.preventDefault()
		const formData = Object.fromEntries(new FormData(e.target))
		dispatch(searchRadioThunk(formData))
	}

	return (
		<>
			<form className="search-form" onSubmit={searchHandler}>
				<div className="input-container">
					<InputName />
				</div>
				<div className="input-container">
					<InputGenre />
				</div>
				<div className="input-container">
					<InputCountry />
				</div>
				<button className="search-button" type="submit">
					Найти
				</button>
			</form>

			<div className="cards-container">
				{radios?.map(el => (
					<MediaCard key={el.id} el={el} />
				))}
			</div>
		</>
	)
}
