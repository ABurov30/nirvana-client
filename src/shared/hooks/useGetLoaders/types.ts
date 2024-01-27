import { ThunkAction, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'

import { ActiveType } from '../../../entities/User/types'

import { RootState } from '../../Redux/store'

type ThunkResult<R> = ThunkAction<R, RootState, undefined, UnknownAction>

export type useGetLoadersArgs = {
	offset: number
	setOffset: React.Dispatch<React.SetStateAction<number>>
	dispatch: ThunkDispatch<RootState, undefined, UnknownAction>
	thunk: (offset: number, userId: string) => ThunkResult<void>
	user: ActiveType
}
