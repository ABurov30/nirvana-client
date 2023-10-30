import { useGetAllRadios } from '../../hooks/useGetAllRadios'
import { RadioType } from '../../types/radioTypes'
import { Card, Typography } from 'radio-app-uikit'
import { useTranslation } from 'react-i18next'
import style from './Radios.module.scss'
import React from 'react'

export default function Radios(): JSX.Element {
	const radios = useGetAllRadios()
	console.log(radios)
	const { t } = useTranslation()
	return (
		<>
			<div>
				<Typography
					text={'Your weekly top stations'}
					fontSize="18"
					weight="medium"
				/>
				<div className={style.cardsContainer}>
					{radios?.map(radio => (
						<Card
							key={radio.id}
							srcImg={
								radio?.favicon === ''
									? '/img/cover.jpeg'
									: radio?.favicon
							}
							title={radio.name}
							artist={radio.country}
						/>
					))}
				</div>
			</div>
		</>
	)
}
