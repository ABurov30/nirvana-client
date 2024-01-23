import {
	Card,
	LeftArrowRoundButton,
	RightArrowRoundButton,
	Typography
} from 'nirvana-uikit'
import { turnOnPlayMode } from '../../shared/utils/turnOnPlayMode'
import { useAppDispatch } from '../../shared/Redux/hooks'
import style from './TracksRow.module.scss'
import { type TracksRowProps } from './types'
import React, { memo } from 'react'

export const TracksRow = memo(function TracksRow({
	title,
	tracks,
	loadPrev,
	loadNext
}: TracksRowProps): JSX.Element | null {
	const dispatch = useAppDispatch()
	return (
		<div className={style.cardsFlowContainer}>
			<div className={style.header}>
				<Typography text={title} fontSize="1em" weight="medium" />
				<div className={style.buttonsContainer}>
					<LeftArrowRoundButton onClick={loadPrev} size={'2.5em'} />
					<RightArrowRoundButton onClick={loadNext} size={'2.5em'} />
				</div>
			</div>
			<div className={style.cardsContainer}>
				{tracks?.map((track, i) => (
					<Card
						onClick={() => {
							turnOnPlayMode(i, tracks, dispatch)
						}}
						key={track?.id}
						srcImg={!track?.img ? '/img/cover.svg' : track?.img}
						title={
							track?.title?.length > 10
								? `${track?.title?.slice(0, 10)}...`
								: track?.title
						}
						subTitle={track?.subTitle}
					/>
				))}
			</div>
		</div>
	)
})
