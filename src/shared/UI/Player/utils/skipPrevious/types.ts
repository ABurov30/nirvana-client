import { Dispatch, MutableRefObject, SetStateAction } from 'react'

import { Track } from 'entities/Track/types'

export interface skipPreviousArgs {
	tracks: Track[]
	currentTrack: Track
	setCurrentTrack: Dispatch<SetStateAction<Track>>
	audioElem: MutableRefObject<HTMLAudioElement>
}
