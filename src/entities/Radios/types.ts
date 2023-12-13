export interface Radio {
	id: string
	name: string
	url: string
	homepage: string
	country: string
	favicon: string
	tags: ['', '']
	language: ['', '']
	votes: number
	codec: string
	progress: number
	length: number
	isLiked: boolean
}

export interface RadiosState {
	radios: Radio[]
	radio: Radio | null
}
