import { useAppDispatch, useAppSelector } from '../../services/Redux/hooks'
import TracksRow from '../../ui/TracksRow/TracksRow'
//@ts-ignore
import styles from './TrackPage.module.scss'
import React, { useState } from 'react'

export default function TrackPage(): JSX.Element {
	const dispatch = useAppDispatch()
	const { radios } = useAppSelector(state => state.radio)
	const [offset, setOffset] = useState(0)

	const loadPrevTracks = () => {
		if (offset >= 5) {
			setOffset(prev => prev - 5)
			dispatch(getAllTrackThunk(offset))
		} else {
			dispatch(getAllTrackThunk(0))
		}
	}

	const loadNextTracks = () => {
		setOffset(prev => prev + 5)
		dispatch(getAllTrackThunk(offset))
	}

	console.log()
	return (
		<div className={styles.trackPage}>
			{/* <SearchForm
				fields={fields}
				buttons={buttons}
				onSubmit={searchHandler}
			/> */}
			<TracksRow
				tracks={radios}
				loadNext={loadNextTracks}
				loadPrev={loadPrevTracks}
			/>
		</div>
	)
}
