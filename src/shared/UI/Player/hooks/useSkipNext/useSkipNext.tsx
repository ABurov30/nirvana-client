import { useEffect } from 'react'

import { useSkipNextArgs } from './types'

export function useSkipNext({
	audioElem,
	currentTrack,
	skipNext,
	setCurrentTrack,
	tracks,
	setIsPlaying
}: useSkipNextArgs) {
	useEffect(() => {
		if (audioElem?.current?.currentTime === currentTrack?.length) {
			skipNext({
				audioElem,
				setCurrentTrack,
				tracks,
				currentTrack,
				setIsPlaying
			})
		}
	}, [audioElem?.current?.currentTime])
}
