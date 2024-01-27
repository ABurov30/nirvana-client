import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
	getFavoriteRadiosThunk,
	getFavoriteTracksThunk
} from 'entities/Favorite/thunk'
import { ActiveType } from 'entities/User/types'

import { useAppDispatch, useAppSelector } from 'shared/Redux/hooks'
import { TracksRow } from 'shared/UI/TracksRow/TracksRow'
import { useGetLoaders } from 'shared/hooks/useGetLoaders/useGetLoaders'

import styles from './FavoritesPage.module.scss'

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

	const {
		loadNext: loadNextFavoriteTracks,
		loadPrev: loadPrevFavoriteTracks
	} = useGetLoaders({
		offset: offsetTracks,
		setOffset: setOffsetTracks,
		dispatch,
		thunk: getFavoriteTracksThunk,
		user: user as unknown as ActiveType
	})

	const {
		loadNext: loadNextFavoriteRadios,
		loadPrev: loadPrevFavoriteRadios
	} = useGetLoaders({
		offset: offsetRadios,
		setOffset: setOffsetRadios,
		dispatch,
		thunk: getFavoriteRadiosThunk,
		user: user as unknown as ActiveType
	})

	return (
		<div className={styles.favoritesPage}>
			<TracksRow
				title={t('FavoritesPage.yourFavoriteTracks')}
				tracks={favoriteTracks}
				loadNext={loadNextFavoriteTracks}
				loadPrev={loadPrevFavoriteTracks}
			/>
			<TracksRow
				title={t('FavoritesPage.yourFavoriteRadios')}
				tracks={favoriteRadios}
				loadNext={loadNextFavoriteRadios}
				loadPrev={loadPrevFavoriteRadios}
			/>
		</div>
	)
}

export default FavoritesPage
