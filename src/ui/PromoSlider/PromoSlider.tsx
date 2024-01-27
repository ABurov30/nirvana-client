import { Carousel } from 'antd'

import { PromoSliderProps } from './types'

import styles from './PromoSlider.module.scss'

function PromoSlider({ promos }: PromoSliderProps) {
	return (
		<Carousel autoplay autoplaySpeed={3000} fade={true}>
			{promos?.map(promo => (
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
