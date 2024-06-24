import { memo } from 'react'

import { PlayBlockButton, ShareRoundButton, Typography } from 'nirvana-uikit'

import { shareHandler } from './handlers/shareHandler'
import { Carousel } from 'antd'
import { debounce } from 'lodash'

import { type TrackSliderProps } from './types'

import { useAppDispatch } from 'shared/Redux/hooks'
import { turnOnPlayMode } from 'shared/utils/turnOnPlayMode'

import styles from './TrackSlider.module.scss'
import { t } from 'i18next'

export const TrackSlider = memo(function TrackSlider({
	tracks
}: TrackSliderProps) {
	const dispatch = useAppDispatch()

	return (
		<div className={styles.carousel}>
			<Carousel fade={true} autoplay autoplaySpeed={3000}>
				{tracks?.map((track, i) => (
					<div key={track.id} className={styles.carouselItem}>
						<div className={styles.textContainer}>
							<Typography
								text={track.title}
								fontSize="3em"
								weight="semibold"
								color="#F3F3F3"
							/>
							<Typography
								text={track.subTitle}
								fontSize="2em"
								weight="medium"
								color="#F3F3F3"
							/>
						</div>
						<div className={styles.buttonContainer}>
							<div className={styles.blockButtons}>
								<PlayBlockButton
									text={t('Shared.playAll')}
									onClick={() => {
										turnOnPlayMode(i, tracks, dispatch)
									}}
								/>
							</div>
							<div className={styles.roundButtons}>
								<ShareRoundButton
									onClick={debounce(
										() => {
											shareHandler(dispatch)
										},
										1000,
										{
											leading: true
										}
									)}
								/>
							</div>
						</div>
						<img
							src={track.img ? track.img : '/icons/cover.svg'}
							className={styles.img}
							loading="lazy"
							decoding="async"
							alt={track.title}
						/>
						<div className={styles.bg}></div>
					</div>
				))}
			</Carousel>
		</div>
	)
})
