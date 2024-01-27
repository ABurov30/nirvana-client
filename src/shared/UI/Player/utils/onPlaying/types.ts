import { MutableRefObject, SetStateAction } from 'react'

import { Track } from 'entities/Track/types'

export type onPlayingArgs = {
	audioElem: MutableRefObject<HTMLAudioElement>
	currentTrack: Track
	setCurrentTrack: (value: SetStateAction<Track>) => void
}
