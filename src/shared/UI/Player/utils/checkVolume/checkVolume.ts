import { Dispatch, MutableRefObject } from 'react'

export const checkVolume = (
	e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	isDragingVolume: boolean,
	volumeRef: MutableRefObject<HTMLDivElement>,
	audioElem: MutableRefObject<HTMLAudioElement>,
	setVolume: Dispatch<React.SetStateAction<number>>
) => {
	if (!isDragingVolume) return
	let width = volumeRef?.current?.clientWidth
		? volumeRef?.current?.clientWidth
		: 0
	const offset = e.nativeEvent?.offsetX
	const divProgress = (offset / width) * 100
	const newVolume = divProgress / 100
	audioElem.current.volume = newVolume
	setVolume(newVolume)
}
