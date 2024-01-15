import { Track } from "../Track/types"


export type CurTracks = {
	curTracks: Track[]
	position: number
	loadPrev?: () => void
	loadNext?: () => void
	offset: number
}
