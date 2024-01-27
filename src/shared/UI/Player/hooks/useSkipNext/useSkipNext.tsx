import { useEffect } from 'react'

import { useSkipNextArgs } from './types'

export function useSkipNext({
	audioElem,
	currentTrack,
	skipNext,
	setCurrentTrack,
	tracks
}: useSkipNextArgs) {
	useEffect(() => {
		if (audioElem?.current?.currentTime === currentTrack?.length)
			skipNext({ audioElem, setCurrentTrack, tracks, currentTrack })
	}, [audioElem?.current?.currentTime])
}
