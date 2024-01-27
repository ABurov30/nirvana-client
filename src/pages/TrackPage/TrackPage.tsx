import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { getTracksThunk, searchTracksThunk } from 'entities/Track/thunk'
import { ActiveType } from 'entities/User/types'

import { useAppDispatch, useAppSelector } from 'shared/Redux/hooks'
import { SearchForm } from 'shared/UI/Forms/SearchForm/SearchForm'
import { TrackSlider } from 'shared/UI/TrackSlider/TrackSlider'
import { TracksRow } from 'shared/UI/TracksRow/TracksRow'
import { useAutocomplete } from 'shared/hooks/useAutocomplete/useAutocomlete'
import { useGetLoaders } from 'shared/hooks/useGetLoaders/useGetLoaders'

import styles from './TrackPage.module.scss'

export default function TrackPage(): JSX.Element {
	const user = useAppSelector(state => state.user)
	useEffect(() => {
		dispatch(getTracksThunk(0, (user as unknown as ActiveType).id))
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
	const { t } = useTranslation()

	const URL = '/track'
	const fields = [
		{
			label: t('Shared.track'),
			name: 'trackTitle',
			value: tracksTitlesInput,
			onChange: setTracksTitlesInput,
			path: `${URL}/intualSearchTrackTitle`,
			options: tracksTitles,
			setOptions: setTracksTitles
		},
		{
			label: t('Shared.artist'),
			name: 'artist',
			value: artistsInput,
			onChange: setArtistsInput,
			path: `${URL}/intualSearchArtist`,
			options: artists,
			setOptions: setArtists
		}
	]

	const buttons = [
		{
			text: t('Shared.search'),
			type: 'submit'
		}
	]

	const { loadNext: loadNextTracks, loadPrev: loadPrevTracks } =
		useGetLoaders({
			offset,
			setOffset,
			dispatch,
			thunk: getTracksThunk,
			user: user as unknown as ActiveType
		})

	const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const form = e.currentTarget
		const formData = {
			trackTitle: form.trackTitle.value,
			artist: form.artist.value
		}
		if (!formData.trackTitle && !formData.artist) {
			dispatch(getTracksThunk(0, (user as unknown as ActiveType).id))
		} else {
			dispatch(
				searchTracksThunk(formData, (user as unknown as ActiveType).id)
			)
		}
	}

	return (
		<div className={styles.trackPage}>
			<TrackSlider tracks={tracks} />
			<SearchForm
				fields={fields}
				//@ts-ignore
				buttons={buttons}
				onSubmit={searchHandler}
			/>
			<TracksRow
				title={t('TrackPage.yourWeeklyTopTracks')}
				tracks={tracks}
				loadNext={loadNextTracks}
				loadPrev={loadPrevTracks}
			/>
		</div>
	)
}
