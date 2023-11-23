import { searchRadioThunk } from '../../entities/Radios/thunk'
import SearchForm from '../../ui/Forms/SearchForm/SearchForm'
import { useUniqCountry } from '../../hooks/useUniqCountry'
import { useUniqGenre } from '../../hooks/useUniqTaqs'
import { useUniqName } from '../../hooks/useUniqName'
import Radios from '../../widgets/Radios/Radios'
import styles from './RadioPage.module.scss'
import { useDispatch } from 'react-redux'
import React from 'react'

export default function RadioPage(): JSX.Element {
	const countries = useUniqCountry()
	const genres = useUniqGenre()
	const names = useUniqName()

	const fields = [
		{ label: 'Station', name: 'name', options: names },
		{ label: 'Genre', name: 'tags', options: genres },
		{ label: 'Country', name: 'country', options: countries }
	]

	const buttons = [
		{
			text: 'Search',
			type: 'submit'
		}
	]

	const dispatch = useDispatch()
	const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = Object.fromEntries(new FormData(e.target))
		console.log(formData, 'form data')
		dispatch(searchRadioThunk(formData))
	}

	console.log()
	return (
		<div className={styles.radioPage}>
			<SearchForm
				fields={fields}
				buttons={buttons}
				onSubmit={searchHandler}
			/>
			<Radios />
		</div>
	)
}
