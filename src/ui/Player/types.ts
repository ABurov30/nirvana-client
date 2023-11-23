import { Radio } from '../../entities/Radios/types'
import { Dispatch, SetStateAction } from 'react'

export interface PlayerProps {
	tracks: Radio[]
	position: number
}
