import { useLayoutEffect } from 'react'

import { usePlayOnMountArgs } from './types'

export function usePlayOnMount({
	tracks,
	setCurrentTrack,
	position,
	audioElem,
	setIsPlaying
}: usePlayOnMountArgs) {
	useLayoutEffect(() => {
		setCurrentTrack(tracks[position])
		const timeoutId = setTimeout(() => {
			audioElem?.current?.play()
			setIsPlaying(true)
		}, 500)
		return () => {
			clearTimeout(timeoutId)
		}
	}, [tracks, position])
}
