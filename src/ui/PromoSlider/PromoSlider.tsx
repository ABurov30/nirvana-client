import {
	LikeRoundButton,
	MixBlockButton,
	PlayBlockButton,
	ShareRoundButton,
	Typography
} from 'radio-app-uikit'
import { turnOnPlayMode } from '../../shared/utils/turnOnPlayMode/turnOnPlayMode'
import { useAppDispatch } from '../../shared/Redux/hooks'
import Carousel from 'react-bootstrap/Carousel'
//@ts-ignore
import styles from './PromoSlider.module.scss'
import { PromoSliderProps } from './types'
import React from 'react'

function PromoSlider({ promos }: PromoSliderProps) {
	console.log(promos, 'promos')
	return (
		<Carousel fade className={styles.carousel}>
			{promos?.map((promo, i) => (
				<Carousel.Item key={promo.id} className={styles.carouselItem}>
					<img
						src={promo.favicon ? promo.favicon : '/img/cover.jpeg'}
						className={styles.img}
					/>
				</Carousel.Item>
			))}
		</Carousel>
	)
}

export default PromoSlider
