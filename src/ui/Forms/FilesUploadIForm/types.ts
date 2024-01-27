import { FormEvent } from 'react'

import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'

export interface onSumbitArgs {
	e: FormEvent<HTMLFormElement>
	dispatch: ThunkDispatch<{}, undefined, UnknownAction>
	trackName: string
	track?: File
	img?: File
	artist: string
}
