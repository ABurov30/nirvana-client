import { useAppDispatch, useAppSelector } from '../../shared/Redux/hooks'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import SearchForm from '../../ui/Forms/SearchForm/SearchForm'
import { useUniqName } from '../../shared/hooks/useUniqStation'
import { getTracksThunk } from '../../entities/Track/thunk'
import TrackSlider from '../../ui/TrackSlider/TrackSlider'
import TracksRow from '../../ui/TracksRow/TracksRow'
//@ts-ignore
import styles from './TrackPage.module.scss'
import { buttons } from './configs/buttons'
import { searchRadioThunk } from '../../entities/Radios/thunk'

export default function TrackPage(): JSX.Element {
	const user = useAppSelector(state => state.user)
	useLayoutEffect(() => {
		dispatch(getTracksThunk(0, user.id))
	}, [])
	const dispatch = useAppDispatch()
	const { tracks } = useAppSelector(state => state.track)
	const [offset, setOffset] = useState(0)


	const loadPrevTracks = () => {
		if (offset >= 5) {
			setOffset(prev => prev - 5)
			dispatch(getTracksThunk(offset, user.id))
		} else {
			dispatch(getTracksThunk(0, user.id))
		}
	}

	const loadNextTracks = () => {
		setOffset(prev => prev + 5)
		dispatch(getTracksThunk(offset, user.id))
	}

	const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = Object.fromEntries(new FormData(e.target))
		dispatch(searchRadioThunk(formData))
	}

	return (
		<div className={styles.trackPage}>
			<TrackSlider tracks={tracks} />
			{/* <SearchForm
				fields={fields}
				buttons={buttons}
				onSubmit={searchHandler}
			/> */}
			<TracksRow
				tracks={tracks}
				loadNext={loadNextTracks}
				loadPrev={loadPrevTracks}
			/>
		</div>
	)
}
