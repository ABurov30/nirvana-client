import { Track } from '../../entities/Track/types'

export interface TracksRowProps {
	tracks:  Track[]
	loadNext: () => void
	loadPrev: () => void
}
