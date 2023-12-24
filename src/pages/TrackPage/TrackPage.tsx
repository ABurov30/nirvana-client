import { useAppDispatch, useAppSelector } from '../../services/Redux/hooks'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import SearchForm from '../../ui/Forms/SearchForm/SearchForm'
import { getTracksThunk } from '../../entities/Track/thunk'
import TrackSlider from '../../ui/TrackSlider/TrackSlider'
import { useUniqName } from '../../hooks/useUniqName'
import TracksRow from '../../ui/TracksRow/TracksRow'
//@ts-ignore
import styles from './TrackPage.module.scss'
import { buttons } from './configs/buttons'

export default function TrackPage(): JSX.Element {
	const names = useUniqName('/radio')
	useLayoutEffect(() => {
		dispatch(getTracksThunk(0))
	}, [])
	const dispatch = useAppDispatch()
	const { tracks } = useAppSelector(state => state.track)
	const [offset, setOffset] = useState(0)

	const fields = [{ label: 'Song', name: 'name', options: names }]

	const loadPrevTracks = () => {
		if (offset >= 5) {
			setOffset(prev => prev - 5)
			dispatch(getTracksThunk(offset))
		} else {
			dispatch(getTracksThunk(0))
		}
	}

	const loadNextTracks = () => {
		setOffset(prev => prev + 5)
		dispatch(getTracksThunk(offset))
	}

	const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = Object.fromEntries(new FormData(e.target))
		console.log(formData, 'form data')
		// dispatch(searchRadioThunk(formData))
	}

	return (
		<div className={styles.trackPage}>
			<TrackSlider tracks={tracks} />
			<SearchForm
				fields={fields}
				buttons={buttons}
				onSubmit={searchHandler}
			/>
			<TracksRow
				tracks={tracks}
				loadNext={loadNextTracks}
				loadPrev={loadPrevTracks}
			/>
		</div>
	)
}
