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
import styles from './TrackSlider.module.scss'
import { type TrackSliderProps } from './types'
import React from 'react'

function TrackSlider({ tracks }: TrackSliderProps) {
	const dispatch = useAppDispatch()
	return (
		<Carousel fade className={styles.carousel}>
			{tracks?.map((track, i) => (
				<Carousel.Item key={track.id} className={styles.carouselItem}>
					{track?.title && (
						<>
							<div className={styles.textContainer}>
								<Typography
									text={track.title}
									fontSize="32"
									weight="semibold"
									color="#F3F3F3"
								/>
								<Typography
									text={track.subTitle}
									fontSize="20"
									weight="medium"
									color="#BDBEBE"
								/>
							</div>
							<div className={styles.buttonContainer}>
								<div className={styles.blockButtons}>
									<PlayBlockButton
										onClick={() => {
											turnOnPlayMode(i, tracks, dispatch)
										}}
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
						src={track.img ? track.img : '/img/cover.jpeg'}
						className={styles.img}
					/>
				</Carousel.Item>
			))}
		</Carousel>
	)
}

export default TrackSlider
