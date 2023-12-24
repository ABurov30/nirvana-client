export interface Track {
	id: string
	title: string
	url: string
	subTitle: string
	img: string
	isLiked: boolean
	type: 'radio' | 'track'
}

export interface TracksState {
	tracks: Track[]
}
