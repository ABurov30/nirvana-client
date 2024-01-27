import { skipPreviousArgs } from "./types"

export async function skipPrevious({
	tracks,
	currentTrack,
	setCurrentTrack,
	audioElem
}: skipPreviousArgs) {
	const index = tracks.findIndex(track => track.id === currentTrack.id)
	index === 0
		? setCurrentTrack(tracks[tracks.length - 1])
		: setCurrentTrack(tracks[index - 1])
	audioElem.current.currentTime = 0
	await audioElem?.current?.load()
	audioElem?.current?.play()
}
