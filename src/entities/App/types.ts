export type AppState = {
	theme: Theme
	isPlayMode: boolean
}

export enum Theme {
	light = 'light',
	dark = 'dark'
}

export enum Language {
	ru = 'ru',
	en = 'en'
}
