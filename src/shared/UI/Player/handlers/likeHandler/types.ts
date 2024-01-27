import { UnknownAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { Track } from 'entities/Track/types'
import { ActiveType } from 'entities/User/types'

import { RootState } from 'shared/Redux/store'

export type likeHandlerArgs = {
	currentTrack: Track
	dispatch: ThunkDispatch<RootState, undefined, UnknownAction>
	user: ActiveType
}
