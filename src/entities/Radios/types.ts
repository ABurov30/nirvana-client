import { Track } from 'entities/Track/types'

export interface RadiosState {
	radios: Track[]
}

export interface SearchRadioForm {
	name: string
	tags: string
	country: string
}
