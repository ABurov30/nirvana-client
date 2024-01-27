import { Dispatch, MutableRefObject, SetStateAction } from 'react'

import { Track } from 'entities/Track/types'

export type usePlayOnMountArgs = {
	tracks: Track[]
	setCurrentTrack: Dispatch<SetStateAction<Track>>
	position: number
	audioElem: MutableRefObject<HTMLAudioElement>
	setIsPlaying: (value: SetStateAction<boolean>) => void
}
