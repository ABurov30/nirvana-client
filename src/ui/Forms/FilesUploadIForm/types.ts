import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'
import { FormEvent } from 'react'

export interface onSumbitArgs {
	e: FormEvent<HTMLFormElement>
	dispatch: ThunkDispatch<{}, undefined, UnknownAction>
	trackName: string
	track?: File
	img?: File
	artist: string
}
