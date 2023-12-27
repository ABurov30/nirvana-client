export type UserFromBackend = {
	id: number
	email: string
	nickname: string
	confirmed: boolean
}

export type ActiveType = UserFromBackend & {
	status: 'active'
}

export type FetchingUserType = {
	id: null
	status: 'fetching'
}

export type NonActiveType = UserFromBackend & {
	status: 'non-active'
}

export type GuestType = {
	id: null
	status: 'guest'
}

export type UserType = ActiveType | GuestType | FetchingUserType | NonActiveType
