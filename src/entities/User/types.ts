export type UserFromBackend = {
	id: number
	email: string
	nickname: string
}

export type LoggedType = UserFromBackend & {
	status: 'logged'
}

export type FetchingUserType = {
	id: null
	status: 'fetching'
}

export type GuestType = {
	id: null
	status: 'guest'
}

export type UserType = GuestType | FetchingUserType | LoggedType
