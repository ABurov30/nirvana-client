export type UserFromBackend = {
	id: number
	email: string
	nickname: string
	confirmed: boolean
}

export type ActiveType = UserFromBackend & {
	status: UserStatus.active
}

export type FetchingUserType = {
	status: UserStatus.fetching
}

export type NonActiveType = UserFromBackend & {
	status: UserStatus.nonActive
}

export type GuestType = {
	status: UserStatus.guest
}

export enum UserStatus {
	guest = 'guest',
	nonActive = 'non-active',
	fetching = 'fetching',
	active = 'active'
}

export type UserType = ActiveType | GuestType | FetchingUserType | NonActiveType
