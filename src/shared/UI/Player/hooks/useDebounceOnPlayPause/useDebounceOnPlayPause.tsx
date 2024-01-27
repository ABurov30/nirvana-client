import { useEffect } from 'react'

import { useDebounceOnPlayPauseArgs } from './types'

export function useDebounceOnPlayPause({
	audioElem,
	isPlaying
}: useDebounceOnPlayPauseArgs) {
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (isPlaying) {
				audioElem?.current?.play()
			} else {
				audioElem?.current?.pause()
			}
		}, 500)
		return () => {
			clearTimeout(timeoutId)
		}
	}, [isPlaying])
}
