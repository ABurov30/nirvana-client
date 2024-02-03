import { Dispatch, MutableRefObject, SetStateAction } from 'react'

import { Track } from 'entities/Track/types'

export interface skipPreviousArgs {
	tracks: Track[]
	currentTrack: Track
	setIsPlaying: Dispatch<SetStateAction<boolean>>
	setCurrentTrack: Dispatch<SetStateAction<Track>>
	audioElem: MutableRefObject<HTMLAudioElement>
}
