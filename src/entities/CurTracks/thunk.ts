import { ThunkAction, UnknownAction } from '@reduxjs/toolkit'

import { addLikeToCurTrack, removeLikeFromCurTrack } from './slice'

import { Severity } from '../Notification/types'
import { Track, TrackType } from '../Track/types'

import { RootState } from '../../shared/Redux/store'
import { request } from '../../shared/Request/Requets'

import {
	addFavoritesRadio,
	addFavoritesTrack,
	removeFavoritesRadio,
	removeFavoritesTrack
} from '../Favorite/slice'
import { setNotification } from '../Notification/slice'

const URL = '/favorite'

export const removeLikeThunk =
	(
		trackId: string,
		userId: string,
		type: TrackType
	): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async dispatch => {
		const res = await request.sendRequest({
			method: 'delete',
			url: `${URL}`,
			data: { id: trackId, userId, type }
		})
		if (res.status !== 200) {
			dispatch(
				setNotification({
					message: res?.data,
					severity: Severity.error
				})
			)
		} else {
			type === TrackType.radio
				? dispatch(removeFavoritesRadio(trackId))
				: dispatch(removeFavoritesTrack(trackId))
			dispatch(removeLikeFromCurTrack(trackId))
			dispatch(
				setNotification({
					message: 'Like removed',
					severity: Severity.success
				})
			)
		}
	}

export const addLikeThunk =
	(
		track: Track,
		userId: string,
		type: TrackType
	): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async dispatch => {
		const res = await request.sendRequest({
			method: 'post',
			url: `${URL}`,
			data: { id: track.id, userId, type }
		})
		if (res.status !== 200) {
			dispatch(
				setNotification({
					message: res?.data,
					severity: Severity.error
				})
			)
		} else {
			type === TrackType.radio
				? dispatch(addFavoritesRadio(track))
				: dispatch(addFavoritesTrack(track))
			dispatch(addLikeToCurTrack(track.id))
			dispatch(
				setNotification({
					message: 'Liked',
					severity: Severity.success
				})
			)
		}
	}
