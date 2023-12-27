import { Track } from '../../entities/Track/types'

export interface TracksRowProps {
	title: string
	tracks:  Track[]
	loadNext: () => void
	loadPrev: () => void
}
