import { MutableRefObject, SetStateAction } from 'react'

export type useDebounceOnMountArgs = {
	audioElem: MutableRefObject<HTMLAudioElement>
	setIsPlaying: (value: SetStateAction<boolean>) => void
	setVolume: (value: React.SetStateAction<number>) => void
}
