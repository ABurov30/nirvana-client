export interface Track {
	id: string
	name: string
	url: string
	country: string
	favicon: string
	isLiked: boolean
}

export interface TracksState {
	tracks: Track[]
}
