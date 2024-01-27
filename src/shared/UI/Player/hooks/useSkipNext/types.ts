import { skipNextArgs } from '../../utils/skipNext/types'

export interface useSkipNextArgs extends skipNextArgs {
	skipNext: ({
		tracks,
		currentTrack,
		setCurrentTrack,
		audioElem
	}: skipNextArgs) => Promise<void>
}
