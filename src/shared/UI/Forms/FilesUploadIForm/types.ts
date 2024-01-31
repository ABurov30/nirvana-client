import { type FormEvent } from 'react'

import { type ThunkDispatch, type UnknownAction } from '@reduxjs/toolkit'

import { type RootState } from 'shared/Redux/store'

export interface onSumbitArgs {
	e: FormEvent<HTMLFormElement>
	dispatch: ThunkDispatch<RootState, undefined, UnknownAction>
	trackName: string
	track?: File
	img?: File
	artist: string
}
