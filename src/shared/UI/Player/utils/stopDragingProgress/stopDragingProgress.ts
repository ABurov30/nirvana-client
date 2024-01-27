import { Dispatch, MutableRefObject, SetStateAction } from 'react'

export function stopDragingProgress(
	setIsDragingProgress: Dispatch<SetStateAction<boolean>>,
	audioElem: MutableRefObject<HTMLAudioElement>
) {
	setIsDragingProgress(false)
	audioElem?.current?.play()
}
