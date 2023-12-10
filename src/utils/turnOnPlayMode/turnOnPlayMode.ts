import { setCurTracks, setPosition } from '../../entities/CurTracks/slice'
import { setIsPlayMode } from '../../entities/IsPlayMode/slice'
import { useAppDispatch } from '../../services/Redux/hooks'
import { Radio } from '../../entities/Radios/types'
import React from 'react'

export const turnOnPlayMode = (
	i: number,
	tracks: Radio[],
	dispatch: (action: any) => void
) => {
	dispatch(setPosition(i))
	dispatch(setCurTracks(tracks))
	dispatch(setIsPlayMode(true))
}
