import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../shared/Redux/hooks'
import {
	getFavoriteRadiosThunk,
	getFavoriteTracksThunk
} from '../../entities/Favorite/thunk'
import styles from './FavoritesPage.module.scss'
import { TracksRow } from '../../UI/TracksRow/TracksRow'
import { useTranslation } from 'react-i18next'
import { Typography } from 'radio-app-uikit'

function FavoritesPage() {
	const user = useAppSelector(state => state.user)
	const { favoriteTracks, favoriteRadios } = useAppSelector(
		state => state.favorite
	)
	const { t } = useTranslation()
	useEffect(() => {
		dispatch(getFavoriteTracksThunk(0, user.id))
		dispatch(getFavoriteRadiosThunk(0, user.id))
	}, [])
	const [offsetTracks, setOffsetTracks] = useState(0)
	const [offsetRadios, setOffsetRadios] = useState(0)
	const dispatch = useAppDispatch()
	const loadPrevFavoriteTracks = () => {
		if (offsetTracks >= 5) {
			setOffsetTracks(prev => prev - 5)
			dispatch(getFavoriteTracksThunk(offsetTracks, user.id))
		} else {
			dispatch(getFavoriteTracksThunk(0, user.id))
		}
	}

	const loadNextFavoriteTracks = () => {
		setOffsetTracks(prev => prev + 5)
		dispatch(getFavoriteTracksThunk(offsetTracks, user.id))
	}

	const loadPrevFavoriteRadios = () => {
		if (offsetRadios >= 5) {
			setOffsetRadios(prev => prev - 5)
			dispatch(getFavoriteRadiosThunk(offsetRadios, user.id))
		} else {
			dispatch(getFavoriteRadiosThunk(0, user.id))
		}
	}

	const loadNextFavoriteRadios = () => {
		setOffsetRadios(prev => prev + 5)
		dispatch(getFavoriteRadiosThunk(offsetRadios, user.id))
	}
	return (
		<div className={styles.favoritesPage}>
			{!favoriteRadios.length && !favoriteTracks.length ? (
				<Typography text={t('FavoritesPage.nothingHere')} />
			) : (
				<>
					{favoriteTracks.length && (
						<TracksRow
							title={t('FavoritesPage.yourFavoriteTracks')}
							tracks={favoriteTracks}
							loadNext={loadNextFavoriteTracks}
							loadPrev={loadPrevFavoriteTracks}
						/>
					)}
					{favoriteRadios.length && (
						<TracksRow
							title={t('FavoritesPage.yourFavoriteRadios')}
							tracks={favoriteRadios}
							loadNext={loadNextFavoriteRadios}
							loadPrev={loadPrevFavoriteRadios}
						/>
					)}
				</>
			)}
		</div>
	)
}

export default FavoritesPage
