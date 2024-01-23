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

export interface UploadTrackFrom {
	trackName: string
	artist: string
	cover: File
	track: File
}

export interface SearchTrackForm {
	trackTitle: string
	artist: string
}
