import { MutableRefObject, SetStateAction } from 'react'

export function toggleVolumeControl(
	audioElem: MutableRefObject<HTMLAudioElement | undefined>,
	setVolume: (value: SetStateAction<number>) => void
) {
	if (!audioElem.current) return
	if (audioElem.current.volume > 0) {
		audioElem.current.volume = 0
		setVolume(0)
	} else {
		audioElem.current.volume = 1
		setVolume(1)
	}
}
