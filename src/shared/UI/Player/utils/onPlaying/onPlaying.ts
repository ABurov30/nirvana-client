import { onPlayingArgs } from './types'

export function onPlaying({
	audioElem,
	setCurrentTrack,
	currentTrack
}: onPlayingArgs) {
	const duration = audioElem?.current?.duration
	const currentTime = audioElem?.current?.currentTime
	setCurrentTrack({
		...currentTrack,
		progress: (currentTime / duration) * 100,
		length: duration
	})
}
