import { Carousel } from 'antd'
//@ts-ignore
import styles from './PromoSlider.module.scss'
import { PromoSliderProps } from './types'
import React from 'react'

function PromoSlider({ promos }: PromoSliderProps) {
	return (
		<Carousel autoplay autoplaySpeed={3000} fade={true}>
			{promos?.map((promo, i) => (
				<img
					src={promo.favicon ? promo.favicon : '/img/cover.jpeg'}
					className={styles.img}
					loading="lazy"
					decoding="async"
					alt="promo"
				/>
			))}
		</Carousel>
	)
}

export default PromoSlider
