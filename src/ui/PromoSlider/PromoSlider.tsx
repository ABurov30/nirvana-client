import {
	LikeRoundButton,
	MixBlockButton,
	PlayBlockButton,
	ShareRoundButton,
	Typography
} from 'radio-app-uikit'
import { turnOnPlayMode } from '../../utils/turnOnPlayMode/turnOnPlayMode'
import { useAppDispatch } from '../../services/Redux/hooks'
import Carousel from 'react-bootstrap/Carousel'
//@ts-ignore
import styles from './PromoSlider.module.scss'
import { PromoSliderProps } from './types'
import React from 'react'

function PromoSlider({ promos }: PromoSliderProps) {
	const dispatch = useAppDispatch()
	return (
		<Carousel fade className={styles.carousel}>
			{promos?.map((promo, i) => (
				<Carousel.Item key={promo.id} className={styles.carouselItem}>
					{promo?.name && (
						<>
							<div className={styles.textContainer}>
								<Typography
									text={promo.name}
									fontSize="32"
									weight="semibold"
									color="#F3F3F3"
								/>
								<Typography
									text={promo.country}
									fontSize="20"
									weight="medium"
									color="#BDBEBE"
								/>
							</div>
							<div className={styles.buttonContainer}>
								<div className={styles.blockButtons}>
									<PlayBlockButton
										onClick={() =>
											turnOnPlayMode(i, promos, dispatch)
										}
									/>
									<MixBlockButton
										onClick={() => console.log('mix')}
									/>
								</div>
								<div className={styles.roundButtons}>
									<LikeRoundButton />
									<ShareRoundButton />
								</div>
							</div>
						</>
					)}
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
