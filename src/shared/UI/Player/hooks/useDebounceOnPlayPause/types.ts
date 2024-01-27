import { MutableRefObject } from 'react'

export type useDebounceOnPlayPauseArgs = {
	isPlaying: boolean
	audioElem: MutableRefObject<HTMLAudioElement>
}
