import { FormEvent } from 'react'

import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'

import { RootState } from 'shared/Redux/store'

export interface onSumbitArgs {
	e: FormEvent<HTMLFormElement>
	dispatch: ThunkDispatch<RootState, undefined, UnknownAction>
	trackName: string
	track?: File
	img?: File
	artist: string
}
