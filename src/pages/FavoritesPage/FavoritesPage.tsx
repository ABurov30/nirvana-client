import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../shared/Redux/hooks'
import {
	getFavoriteRadiosThunk,
	getFavoriteTracksThunk
} from '../../entities/Favorite/thunk'
import styles from './FavoritesPage.module.scss'
import { TracksRow } from '../../UI/TracksRow/TracksRow'
import { useTranslation } from 'react-i18next'
import { Typography } from 'nirvana-uikit'
import { ActiveType } from '../../entities/User/types'

function FavoritesPage() {
	const user = useAppSelector(state => state.user)

	const { t } = useTranslation()
	useEffect(() => {
		dispatch(getFavoriteTracksThunk(0, (user as unknown as ActiveType).id))
		dispatch(getFavoriteRadiosThunk(0, (user as unknown as ActiveType).id))
	}, [])
	const { favoriteTracks, favoriteRadios } = useAppSelector(
		state => state.favorite
	)
	const [offsetTracks, setOffsetTracks] = useState(0)
	const [offsetRadios, setOffsetRadios] = useState(0)
	const dispatch = useAppDispatch()
	const loadPrevFavoriteTracks = () => {
		if (offsetTracks >= 5) {
			setOffsetTracks(prev => prev - 5)
			dispatch(
				getFavoriteTracksThunk(
					offsetTracks,
					(user as unknown as ActiveType).id
				)
			)
		} else {
			dispatch(
				getFavoriteTracksThunk(0, (user as unknown as ActiveType).id)
			)
		}
	}

	const loadNextFavoriteTracks = () => {
		setOffsetTracks(prev => prev + 5)
		dispatch(
			getFavoriteTracksThunk(
				offsetTracks,
				(user as unknown as ActiveType).id
			)
		)
	}

	const loadPrevFavoriteRadios = () => {
		if (offsetRadios >= 5) {
			setOffsetRadios(prev => prev - 5)
			dispatch(
				getFavoriteRadiosThunk(
					offsetRadios,
					(user as unknown as ActiveType).id
				)
			)
		} else {
			dispatch(
				getFavoriteRadiosThunk(0, (user as unknown as ActiveType).id)
			)
		}
	}

	const loadNextFavoriteRadios = () => {
		setOffsetRadios(prev => prev + 5)
		dispatch(
			getFavoriteRadiosThunk(
				offsetRadios,
				(user as unknown as ActiveType).id
			)
		)
	}
	return (
		<div className={styles.favoritesPage}>
			{!favoriteTracks.length ? (
				<div className={styles.nothingHereContainer}>
					<Typography text={t('FavoritesPage.nothingHere')} />
				</div>
			) : (
				<>
					{favoriteTracks.length ? (
						<TracksRow
							title={t('FavoritesPage.yourFavoriteTracks')}
							tracks={favoriteTracks}
							loadNext={loadNextFavoriteTracks}
							loadPrev={loadPrevFavoriteTracks}
						/>
					) : null}
					{favoriteRadios.length ? (
						<TracksRow
							title={t('FavoritesPage.yourFavoriteRadios')}
							tracks={favoriteRadios}
							loadNext={loadNextFavoriteRadios}
							loadPrev={loadPrevFavoriteRadios}
						/>
					) : null}
				</>
			)}
		</div>
	)
}

export default FavoritesPage
