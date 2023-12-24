import {
	Card,
	LeftArrowRoundButton,
	RightArrowRoundButton,
	Typography
} from 'radio-app-uikit'
import { turnOnPlayMode } from '../../shared/utils/turnOnPlayMode/turnOnPlayMode'
import { useAppDispatch } from '../../shared/Redux/hooks'
import style from './TracksRow.module.scss'
import { TracksRowProps } from './types'
import React from 'react'

export default function TracksRow({
	tracks,
	loadPrev,
	loadNext
}: TracksRowProps): JSX.Element {
	const dispatch = useAppDispatch()
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
						<LeftArrowRoundButton onClick={loadPrev} size={40} />
						<RightArrowRoundButton onClick={loadNext} size={40} />
					</div>
				</div>
				<div className={style.cardsContainer}>
					{tracks?.map((track, i) => (
						<Card
							onClick={() => turnOnPlayMode(i, tracks, dispatch)}
							key={track.id}
							srcImg={
								!track?.img
									? '/img/cover.svg'
									: track?.img
							}
							title={
								track.title.length > 10
									? `${track.title.slice(0, 10)}...`
									: track.title
							}
							imgSize={Math.floor(
								(document.documentElement.clientWidth * 0.7) / 5
							)}
							subTitle={track.subTitle}
						/>
					))}
				</div>
			</div>
		</>
	)
}
