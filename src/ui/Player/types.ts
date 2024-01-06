import { Track } from '../../entities/Track/types'

export interface PlayerProps {
	tracks: Track[]
	position: number
	setTracks: (tracks: Track[]) => void
}
