import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'

import { setIsPlayMode } from 'entities/App/slice'
import { setCurTracks, setPosition } from 'entities/CurTracks/slice'
import { Track } from 'entities/Track/types'

import { RootState } from 'shared/Redux/store'

export const turnOnPlayMode = (
	i: number,
	tracks: Track[],
	dispatch: ThunkDispatch<RootState, undefined, UnknownAction>
) => {
	dispatch(setPosition(i))
	dispatch(setCurTracks(tracks))
	dispatch(setIsPlayMode(true))
}
