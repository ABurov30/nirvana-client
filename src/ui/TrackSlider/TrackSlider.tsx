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
import styles from './TrackSlider.module.scss'
import { TrackSliderProps } from './types'
import React from 'react'

function TrackSlider({ tracks }: TrackSliderProps) {
	const dispatch = useAppDispatch()
	console.log(tracks)
	return (
		<Carousel fade className={styles.carousel}>
			{tracks?.map((track, i) => (
				<Carousel.Item key={track.id} className={styles.carouselItem}>
					{track?.name && (
						<>
							<div className={styles.textContainer}>
								<Typography
									text={track.name}
									fontSize="32"
									weight="semibold"
									color="#F3F3F3"
								/>
								<Typography
									text={track.country}
									fontSize="20"
									weight="medium"
									color="#BDBEBE"
								/>
							</div>
							<div className={styles.buttonContainer}>
								<div className={styles.blockButtons}>
									<PlayBlockButton
										onClick={() =>
											turnOnPlayMode(i, tracks, dispatch)
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
						src={track.favicon ? track.favicon : '/img/cover.jpeg'}
						className={styles.img}
					/>
				</Carousel.Item>
			))}
		</Carousel>
	)
}

export default TrackSlider
