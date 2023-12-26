import { useAppDispatch, useAppSelector } from '../../shared/Redux/hooks'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import SearchForm from '../../ui/Forms/SearchForm/SearchForm'
import { getTracksThunk, searchTracksThunk } from '../../entities/Track/thunk'
import TrackSlider from '../../ui/TrackSlider/TrackSlider'
import TracksRow from '../../ui/TracksRow/TracksRow'
//@ts-ignore
import styles from './TrackPage.module.scss'
import { buttons } from './configs/buttons'
import { useAutocomplete } from '../../shared/hooks/useAutocomlete'

export default function TrackPage(): JSX.Element {
	const user = useAppSelector(state => state.user)
	useLayoutEffect(() => {
		dispatch(getTracksThunk(0, user.id))
	}, [])
	const dispatch = useAppDispatch()
	const { tracks } = useAppSelector(state => state.track)
	const [offset, setOffset] = useState(0)
	const tracksTitles = useAutocomplete('/track/uniqTracks')
	const artists = useAutocomplete('/track/uniqArtists')

	const fields = [
		{ label: 'Track', name: 'trackTitle', options: tracksTitles },
		{ label: 'Artist', name: 'artist', options: artists }
	]

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
		if (!formData.trackTitle && !formData.artist) {
			dispatch(getTracksThunk(0, user.id))
		} else {
			dispatch(searchTracksThunk(formData, user.id))
		}
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
