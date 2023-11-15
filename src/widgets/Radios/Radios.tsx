import {
	Card,
	LeftArrowRoundButton,
	RightArrowRoundButton,
	Typography
} from 'radio-app-uikit'
import { useAppDispatch, useAppSelector } from '../../services/Redux/hooks'
import { getAllRadiosThunk } from '../../entities/Radios/thunk'
import { useGetAllRadios } from '../../hooks/useGetAllRadios'
import { RadioType } from '../../entities/Radios/types'
import { useTranslation } from 'react-i18next'
import style from './Radios.module.scss'
import React, { useState } from 'react'

export default function Radios(): JSX.Element {
	useGetAllRadios()
	const dispatch = useAppDispatch()
	const [offset, setOffset] = useState(0)
	const { radios } = useAppSelector(state => state.radio)
	const loadPreviousRadios = () => {
		if (offset >= 5) {
			setOffset(prev => prev - 5)
			dispatch(getAllRadiosThunk(offset))
		} else {
			dispatch(getAllRadiosThunk())
		}
	}

	const loadNextRadios = () => {
		setOffset(prev => prev + 5)
		dispatch(getAllRadiosThunk(offset))
	}

	return (
		<>
			<div className={style.cardsFlowContainer}>
				<div className={style.header}>
					<Typography
						text={'Your weekly top stations'}
						fontSize="18"
						weight="medium"
					/>
					<div className={style.buttonsContainer}>
						<LeftArrowRoundButton onClick={loadPreviousRadios} size={40}/>
						<RightArrowRoundButton onClick={loadNextRadios} size={40}/>
					</div>
				</div>
				<div className={style.cardsContainer}>
					{radios?.map(radio => (
						<Card
							key={radio.id}
							srcImg={
								!radio?.favicon
									? '/img/cover.jpeg'
									: radio?.favicon
							}
							title={
								radio.name.length > 10
									? `${radio.name.slice(0, 10)}...`
									: radio.name
							}
							imgSize={200}
							artist={radio.country}
						/>
					))}
				</div>
			</div>
		</>
	)
}
