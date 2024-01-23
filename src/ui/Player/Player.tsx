import { addLikeThunk, removeLikeThunk } from '../../entities/CurTracks/thunk'
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded'

import React, {
	memo,
	useEffect,
	useLayoutEffect,
	useRef,
	useState
} from 'react'
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded'
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import { Typography, PlayButton } from 'nirvana-uikit'

import ShareButton from '../Buttons/ShareButton/ShareButton'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import { useAppSelector } from '../../shared/Redux/hooks'
import debounce from 'lodash.debounce'
//@ts-ignore
import styles from './Player.module.scss'
import { useDispatch } from 'react-redux'
import { formatTime } from '../../shared/utils/formatTime'
import { downloadResource } from '../../shared/utils/downloadResource'
import LikeButton from '../Buttons/LikeButton/LikeButton'

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
	const audioElem = useRef<any>()
	const clickRef = useRef<any>()
	const volumeRef = useRef<any>()

	useLayoutEffect(() => {
		setCurrentTrack(tracks[position])
		const timeoutId = setTimeout(() => {
			audioElem?.current?.play()
			setIsPlaying(true)
		}, 500)
		return () => {
			clearTimeout(timeoutId)
		}
	}, [tracks, position])

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (isPlaying) {
				audioElem?.current?.play()
			} else {
				audioElem?.current?.pause()
			}
		}, 500)
		return () => {
			clearTimeout(timeoutId)
		}
	}, [isPlaying])

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			audioElem.current.play()
			setIsPlaying(true)
			setVolume(audioElem.current.volume)
		}, 500)

		return () => {
			clearTimeout(timeoutId)
		}
	}, [])

	useEffect(() => {
		if (audioElem?.current?.currentTime === currentTrack?.length) skipNext()
	}, [audioElem?.current?.currentTime])

	const PlayPause = () => {
		setIsPlaying(prev => !prev)
	}

	function onPlaying() {
		const duration = audioElem?.current?.duration
		const currentTime = audioElem?.current?.currentTime
		setCurrentTrack({
			...currentTrack,
			progress: (currentTime / duration) * 100,
			length: duration
		})
	}

	async function checkWidth(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		if (!isDragingProgress) return
		await audioElem?.current?.pause()
		let width = clickRef?.current?.clientWidth
			? clickRef?.current?.clientWidth
			: 0
		const offset = e.nativeEvent?.offsetX
		const divProgress = (offset / width) * 100
		const newCurrentTime = (divProgress / 100) * currentTrack.length
		audioElem.current.currentTime = isFinite(newCurrentTime)
			? newCurrentTime
			: 100
	}

	function stopDragingProgress() {
		setIsDragingProgress(false)
		audioElem?.current?.play()
	}

	const checkVolume = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (!isDragingVolume) return
		let width = volumeRef?.current?.clientWidth
			? volumeRef?.current?.clientWidth
			: 0
		const offset = e.nativeEvent?.offsetX
		const divProgress = (offset / width) * 100
		const newVolume = divProgress / 100
		audioElem.current.volume = newVolume
		setVolume(newVolume)
	}

	async function skipPrevious() {
		const index = tracks.findIndex(track => track.id === currentTrack.id)
		index === 0
			? setCurrentTrack(tracks[tracks.length - 1])
			: setCurrentTrack(tracks[index - 1])
		audioElem.current.currentTime = 0
		await audioElem?.current?.load()
		audioElem?.current?.play()
	}

	async function skipNext() {
		const index = tracks.findIndex(track => track.id === currentTrack.id)
		index === tracks.length - 1
			? setCurrentTrack(tracks[0])
			: setCurrentTrack(tracks[index + 1])
		audioElem.current.currentTime = 0
		await audioElem?.current?.load()
		audioElem?.current?.play()
	}

	async function likeHandler() {
		if (currentTrack.isLiked) {
			await dispatch(
				// @ts-ignore
				removeLikeThunk(currentTrack.id, user.id, currentTrack.type)
			)
		} else {
			await dispatch(
				// @ts-ignore
				addLikeThunk(currentTrack, user.id, currentTrack.type)
			)
		}
	}

	function toggleVolumeControl() {
		if (audioElem.current.volume > 0) {
			audioElem.current.volume = 0
			setVolume(0)
		} else {
			audioElem.current.volume = 1
			setVolume(1)
		}
	}

	function downloadHandler() {
		downloadResource(
			currentTrack.url,
			`${currentTrack.title} ${currentTrack.subTitle}.mp3`
		)
	}

	return (
		<>
			<audio
				src={currentTrack?.url}
				ref={audioElem}
				onTimeUpdate={onPlaying}
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
						onClick={debounce(skipPrevious, 1000, {
							leading: true
						})}
						className={styles.controlButton}
					>
						<SkipPreviousRoundedIcon />
					</button>
					<PlayButton isPlaying={isPlaying} onClick={PlayPause} />
					<button
						onClick={debounce(skipNext, 1000, { leading: true })}
						className={styles.controlButton}
					>
						<SkipNextRoundedIcon />
					</button>
					<ShareButton />
					<LikeButton
						isLiked={currentTrack.isLiked}
						onClick={debounce(likeHandler, 10000, {
							leading: true
						})}
					/>
					{isFinite(audioElem?.current?.duration) && (
						<button
							onClick={debounce(downloadHandler, 1000)}
							className={styles.controlButton}
						>
							<FileDownloadOutlinedIcon />
						</button>
					)}
				</div>
				{isFinite(audioElem?.current?.duration) ? (
					<div
						className={styles.navigation}
						onMouseDown={() => setIsDragingProgress(true)}
						onMouseMove={checkWidth}
						onMouseUp={stopDragingProgress}
						ref={clickRef}
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
									audioElem?.current?.currentTime
								)}
							/>
							<Typography
								text={formatTime(audioElem?.current?.duration)}
							/>
						</div>
					</div>
				) : null}

				<div
					className={styles.volume}
					onMouseDown={() => setIsDragingVolume(true)}
					onMouseMove={checkVolume}
					onMouseUp={() => setIsDragingVolume(false)}
					ref={volumeRef}
				>
					<div
						onClick={toggleVolumeControl}
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
