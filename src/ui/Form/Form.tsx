import { useDispatch } from 'react-redux'
import InputCountry from '../inputCountry'
import InputGenre from '../InputGenre'
import InputName from '../inputName'
import React from 'react'
import { searchRadioThunk } from '../../pages/RadiosPage/radiosThunk'

export default function Form() {

    const dispatch = useDispatch()
	const searchHandler = e => {
		e.preventDefault()
		const formData = Object.fromEntries(new FormData(e.target))
		dispatch(searchRadioThunk(formData))
	}
	return (
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
	)
}
