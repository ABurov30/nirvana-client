import { useAppDispatch, useAppSelector } from '../../shared/Redux/hooks'
import React, { useEffect, useState } from 'react'
import { getTracksThunk, searchTracksThunk } from '../../entities/Track/thunk'
//@ts-ignore
import styles from './TrackPage.module.scss'
import { buttons } from './configs/buttons'
import { useAutocomplete } from '../../shared/hooks/useAutocomlete'
import { SearchForm } from '../../ui/Forms/SearchForm/SearchForm'
import { TracksRow } from '../../ui/TracksRow/TracksRow'
import { TrackSlider } from '../../ui/TrackSlider/TrackSlider'

export default function TrackPage(): JSX.Element {
	const user = useAppSelector(state => state.user)
	useEffect(() => {
		dispatch(getTracksThunk(0, user.id))
	}, [])
	const dispatch = useAppDispatch()
	const { tracks } = useAppSelector(state => state.track)
	const [offset, setOffset] = useState(0)
	const { options: tracksTitles, setOptions: setTracksTitles } =
		useAutocomplete('/track/uniqTracks')
	const [tracksTitlesInput, setTracksTitlesInput] = useState('')
	const { options: artists, setOptions: setArtists } =
		useAutocomplete('/track/uniqArtists')
	const [artistsInput, setArtistsInput] = useState('')

	const URL = '/track'
	const fields = [
		{
			label: 'Track',
			name: 'trackTitle',
			value: tracksTitlesInput,
			onChange: setTracksTitlesInput,
			path: `${URL}/intualSearchTrackTitle`,
			options: tracksTitles,
			setOptions: setTracksTitles
		},
		{
			label: 'Artist',
			name: 'artist',
			value: artistsInput,
			onChange: setArtistsInput,
			path: `${URL}/intualSearchArtist`,
			options: artists,
			setOptions: setArtists
		}
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
