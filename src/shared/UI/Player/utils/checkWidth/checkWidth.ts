import { MouseEvent, MutableRefObject } from 'react'

import { Track } from 'entities/Track/types'

export async function checkWidth(
	e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
	isDragingProgress: boolean,
	audioElem: MutableRefObject<HTMLAudioElement>,
	clickRef: MutableRefObject<HTMLDivElement>,
	currentTrack: Track
) {
	if (!isDragingProgress) return
	await audioElem?.current?.pause()
	let width = clickRef?.current?.clientWidth
		? clickRef?.current?.clientWidth
		: 0
	const offset = e.nativeEvent?.offsetX
	const divProgress = (offset / width) * 100
	const newCurrentTime = (divProgress / 100) * currentTrack.length
	audioElem.current.currentTime = isFinite(newCurrentTime)
		? newCurrentTime
		: 100
}
