import { useEffect } from 'react'

import { useDebounceOnMountArgs } from './types'

export function useDebounceOnMount({
	audioElem,
	setIsPlaying,
	setVolume
}: useDebounceOnMountArgs) {
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			audioElem.current.play()
			setIsPlaying(true)
			setVolume(audioElem.current.volume)
		}, 500)
		return () => {
			clearTimeout(timeoutId)
		}
	}, [])
}
