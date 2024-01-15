export interface Track {
	id: string
	title: string
	url: string
	subTitle: string
	img: string
	isLiked: boolean
	type: TrackType
	progress: number
	length: number
}

export enum TrackType {
	radio = 'radio',
	track = 'track'
}

export interface TracksState {
	tracks: Track[]
}
