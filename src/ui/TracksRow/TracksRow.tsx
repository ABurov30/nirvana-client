import {
	Card,
	LeftArrowRoundButton,
	RightArrowRoundButton,
	Typography
} from 'radio-app-uikit'
import { setCurTracks, setPosition } from '../../entities/CurTracks/slice'
import { setIsPlayMode } from '../../entities/IsPlayMode/slice'
import { useAppDispatch } from '../../services/Redux/hooks'
import style from './TracksRow.module.scss'
import { TracksRowProps } from './types'
import React from 'react'

export default function TracksRow({
	tracks,
	loadPrev,
	loadNext
}: TracksRowProps): JSX.Element {
	const dispatch = useAppDispatch()

	const turnOnPlayMode = (i: number) => {
		dispatch(setPosition(i))
		dispatch(setCurTracks(tracks))
		dispatch(setIsPlayMode(true))
	}

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
							onClick={() => turnOnPlayMode(i)}
							key={track.id}
							srcImg={
								!track?.favicon
									? '/img/cover.jpeg'
									: track?.favicon
							}
							title={
								track.name.length > 10
									? `${track.name.slice(0, 10)}...`
									: track.name
							}
							imgSize={200}
							artist={track.country}
						/>
					))}
				</div>
			</div>
		</>
	)
}
