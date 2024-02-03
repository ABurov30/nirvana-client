import { skipNextArgs } from './types'

export async function skipNext({
	tracks,
	currentTrack,
	setCurrentTrack,
	audioElem
}: skipNextArgs) {
	const index = tracks.findIndex(track => track.id === currentTrack.id)
	index === tracks.length - 1
		? setCurrentTrack(tracks[0])
		: setCurrentTrack(tracks[index + 1])
	audioElem.current.currentTime = 0
	await audioElem?.current?.load()
	audioElem?.current?.play()
}
