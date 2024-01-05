export type AppState = {
	theme: Theme
	language: Language
	isPlayMode: boolean
}

export enum Theme {
	light = 'light',
	dark = 'dark'
}

export enum Language {
	ru = 'ru',
	eng = 'eng'
}
