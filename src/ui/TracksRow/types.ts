import { Radio } from '../../entities/Radios/types'
import { Track } from '../../entities/Track/types'

export interface TracksRowProps {
	tracks: Radio[] | Track[]
	loadNext: () => void
	loadPrev: () => void
}
