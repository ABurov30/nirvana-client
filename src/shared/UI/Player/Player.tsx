import { LegacyRef, MutableRefObject, memo, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import { LikeButton, PlayButton, ShareButton, Typography } from 'nirvana-uikit'

import { downloadHandler } from './handlers/downloadHandler/downloadHandler'
import { likeHandler } from './handlers/likeHandler/likeHandler'
import { shareHandler } from './handlers/shareHandler/shareHandler'
import { toggleVolumeControl } from './handlers/toggleVolumeControl/toggleVolumeControl'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded'
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded'
import debounce from 'lodash.debounce'

import { ActiveType } from 'entities/User/types'

import { useAppSelector } from 'shared/Redux/hooks'
import { formatTime } from 'shared/utils/formatTime'

import { hashtags, title } from './configs/shareConfig'

import { checkVolume } from './utils/checkVolume/checkVolume'
import { checkWidth } from './utils/checkWidth/checkWidth'
import { onPlaying } from './utils/onPlaying/onPlaying'
import { skipNext } from './utils/skipNext/skipNext'
import { skipPrevious } from './utils/skipPrevious/skipPrevious'
import { stopDragingProgress } from './utils/stopDragingProgress/stopDragingProgress'

import { useDebounceOnMount } from './hooks/useDebounceOnMount/useDebounceOnPlay'
import { useDebounceOnPlayPause } from './hooks/useDebounceOnPlayPause/useDebounceOnPlayPause'
import { usePlayOnMount } from './hooks/usePlayOnMount/usePlayOnMount'
import { useSkipNext } from './hooks/useSkipNext/useSkipNext'

import styles from './Player.module.scss'

export const Player = memo(function Player() {
	const { curTracks: tracks, position } = useAppSelector(
		state => state.curTracks
	)
	const dispatch = useDispatch()
	const [isPlaying, setIsPlaying] = useState(true)
	const [currentTrack, setCurrentTrack] = useState(tracks[position])
	const [isDragingProgress, setIsDragingProgress] = useState(false)
	const [isDragingVolume, setIsDragingVolume] = useState(false)
	const [volume, setVolume] = useState(0)
	const user = useAppSelector(state => state.user)
	const audioElem = useRef<HTMLAudioElement>()
	const clickRef = useRef<HTMLDivElement>()
	const volumeRef = useRef<HTMLDivElement>()

	usePlayOnMount({
		tracks,
		setCurrentTrack,
		position,
		audioElem: audioElem as MutableRefObject<HTMLAudioElement>,
		setIsPlaying
	})

	useDebounceOnPlayPause({
		audioElem: audioElem as MutableRefObject<HTMLAudioElement>,
		isPlaying
	})

	useDebounceOnMount({
		audioElem: audioElem as MutableRefObject<HTMLAudioElement>,
		setIsPlaying,
		setVolume
	})

	useSkipNext({
		audioElem: audioElem as MutableRefObject<HTMLAudioElement>,
		currentTrack,
		skipNext,
		setCurrentTrack,
		tracks
	})

	return (
		<>
			<audio
				src={currentTrack?.url}
				ref={audioElem as LegacyRef<HTMLAudioElement>}
				onTimeUpdate={() =>
					onPlaying({
						audioElem:
							audioElem as MutableRefObject<HTMLAudioElement>,
						setCurrentTrack,
						currentTrack
					})
				}
			/>
			<div
				className={styles.playerBg}
				style={{
					backgroundImage:
						currentTrack.img && `url(${currentTrack.img})`
				}}
			></div>
			<div className={`${styles.playerContainer + ' ' + 'player'}`}>
				<div className={styles.track}>
					<img
						src={
							currentTrack?.img
								? currentTrack.img
								: './img/cover.svg'
						}
						alt={currentTrack.title}
						loading="lazy"
						decoding="async"
					/>
					<div className={styles.title}>
						<Typography
							text={currentTrack?.title}
							weight="semibold"
						/>
						<Typography text={currentTrack?.subTitle} />
					</div>
				</div>
				<div className={styles.controls}>
					<button
						onClick={debounce(
							() =>
								skipPrevious({
									tracks,
									currentTrack,
									setCurrentTrack,
									audioElem:
										audioElem as MutableRefObject<HTMLAudioElement>
								}),
							1000,
							{
								leading: true
							}
						)}
						className={styles.controlButton}
					>
						<SkipPreviousRoundedIcon />
					</button>
					<PlayButton
						isPlaying={isPlaying}
						onClick={() => setIsPlaying(prev => !prev)}
					/>
					<button
						onClick={debounce(
							() =>
								skipNext({
									tracks,
									currentTrack,
									setCurrentTrack,
									audioElem:
										audioElem as MutableRefObject<HTMLAudioElement>
								}),
							1000,
							{ leading: true }
						)}
						className={styles.controlButton}
					>
						<SkipNextRoundedIcon />
					</button>
					<ShareButton
						title={title}
						hashtags={hashtags}
						shareHandler={() => shareHandler(dispatch, title)}
					/>
					<LikeButton
						isLiked={currentTrack.isLiked}
						onClick={debounce(
							() =>
								likeHandler({
									currentTrack,
									dispatch,
									user: user as unknown as ActiveType
								}),
							10000,
							{
								leading: true
							}
						)}
					/>
					{isFinite(audioElem?.current?.duration as number) && (
						<button
							onClick={debounce(
								() => downloadHandler(currentTrack),
								1000
							)}
							className={styles.controlButton}
						>
							<FileDownloadOutlinedIcon />
						</button>
					)}
				</div>
				{isFinite(audioElem?.current?.duration as number) ? (
					<div
						className={styles.navigation}
						onMouseDown={() => setIsDragingProgress(true)}
						onMouseMove={e =>
							checkWidth(
								e,
								isDragingProgress,
								audioElem as MutableRefObject<HTMLAudioElement>,
								clickRef as MutableRefObject<HTMLDivElement>,
								currentTrack
							)
						}
						onMouseUp={() =>
							stopDragingProgress(
								setIsDragingProgress,
								audioElem as MutableRefObject<HTMLAudioElement>
							)
						}
						ref={clickRef as LegacyRef<HTMLDivElement>}
					>
						<div className={styles.navigationController}>
							<div
								className={styles.navigationBar}
								style={{
									width: `${currentTrack?.progress || 0}%`
								}}
							>
								<div className={styles.pointer}></div>
							</div>
						</div>
						<div className={styles.timeContainer}>
							<Typography
								text={formatTime(
									audioElem?.current?.currentTime as number
								)}
							/>
							<Typography
								text={formatTime(
									audioElem?.current?.duration as number
								)}
							/>
						</div>
					</div>
				) : null}

				<div
					className={styles.volume}
					onMouseDown={() => setIsDragingVolume(true)}
					onMouseMove={e =>
						checkVolume(
							e,
							isDragingVolume,
							volumeRef as MutableRefObject<HTMLDivElement>,
							audioElem as MutableRefObject<HTMLAudioElement>,
							setVolume
						)
					}
					onMouseUp={() => setIsDragingVolume(false)}
					ref={volumeRef as LegacyRef<HTMLDivElement>}
				>
					<div
						onClick={() =>
							toggleVolumeControl(audioElem, setVolume)
						}
						className={styles.volumeButton}
					>
						{audioElem.current?.volume ? (
							<VolumeUpRoundedIcon style={{ fill: '#2A2630' }} />
						) : (
							<VolumeOffIcon style={{ fill: '#2A2630' }} />
						)}
					</div>
					{audioElem.current?.volume ? (
						<div className={styles.volumeController}>
							<div
								className={styles.volumeBar}
								style={{
									width: `${volume * 100 || 0}%`
								}}
							>
								<div className={styles.pointer}></div>
							</div>
						</div>
					) : null}
				</div>
			</div>
		</>
	)
})
