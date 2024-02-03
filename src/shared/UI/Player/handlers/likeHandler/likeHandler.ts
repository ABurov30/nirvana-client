import { addLikeThunk, removeLikeThunk } from 'entities/CurTracks/thunk'

import { likeHandlerArgs } from './types'

export async function likeHandler({
	currentTrack,
	dispatch,
	user
}: likeHandlerArgs) {
	if (currentTrack.isLiked) {
		await dispatch(
			removeLikeThunk(currentTrack.id, user.id, currentTrack.type)
		)
	} else {
		await dispatch(addLikeThunk(currentTrack, user.id, currentTrack.type))
	}
}
