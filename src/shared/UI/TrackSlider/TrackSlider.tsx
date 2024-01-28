import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import {
	LikeRoundButton,
	PlayBlockButton,
	ShareRoundButton,
	Typography
} from 'nirvana-uikit'

import { Carousel } from 'antd'
import { debounce } from 'lodash'

import { setNotification } from 'entities/Notification/slice'
import { Severity } from 'entities/Notification/types'

import { TrackSliderProps } from './types'

import { useAppDispatch } from 'shared/Redux/hooks'
import { turnOnPlayMode } from 'shared/utils/turnOnPlayMode'

import styles from './TrackSlider.module.scss'

export const TrackSlider = memo(function TrackSlider({
	tracks
}: TrackSliderProps) {
	const URL = `${window.location.protocol}//${window.location.host}${window.location.pathname}`
	const title = 'Check out best free music streaming app. Dive in Nirvana'
	const dispatch = useAppDispatch()
	const { t } = useTranslation()
	function shareHandler() {
		navigator.clipboard.writeText(title + ' ' + URL)
		dispatch(
			setNotification({
				message: 'Link copied',
				severity: Severity.success
			})
		)
	}
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
								<LikeRoundButton />
								<ShareRoundButton
									onClick={debounce(shareHandler, 1000, {
										leading: true
									})}
								/>
							</div>
						</div>
						<img
							src={track.img ? track.img : '/img/gradient.png'}
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