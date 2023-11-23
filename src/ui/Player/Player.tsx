import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded'
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded'
import { MixRoundButton, RoundButton } from 'radio-app-uikit'
import PlayButton from '../Buttons/PlayButton/PlayButton'
import LikeButton from '../Buttons/LikeButton/LikeButton'
//@ts-ignore
import styles from './Player.module.scss'
import { PlayerProps } from './types'

const mock = [
	{
		id: 1,
		name: "Coco L'Eau",
		country: 'Егор Крид & The Limba',
		favicon:
			'https://muz-tv.ru/storage/images/chart-tracks/thumb/LeFR0oR7uk9vQp8AC2jxign2JUpL5icwPG1TMDNh.jpeg',
		url: 'https://muz-tv.ru/storage/files/chart-tracks/1601977001.mp3'
	},
	{
		id: 2,
		name: 'Rolls Royce',
		country: 'ДЖИГАН, ТИМАТИ & ЕГОР КРИД',
		favicon:
			'https://muz-tv.ru/storage/images/chart-tracks/thumb/00EpH2POBipGR7muvw386TLQJB7nBSAhMq8YyQg1.jpeg',
		url: 'https://muz-tv.ru/storage/files/chart-tracks/1604307771.mp3'
	},
	{
		id: 3,
		name: 'Краш',
		country: 'Клава Кока & NILETTO',
		favicon:
			'https://muz-tv.ru/storage/images/chart-tracks/thumb/9IJHVTADNYAK4NNbhDFBbwGtGw8Pd62UFiTbGQnE.jpeg',
		url: 'https://muz-tv.ru/storage/files/chart-tracks/1593435067.mp3'
	}
]

export default function Player({ tracks, position }: PlayerProps) {
	// tracks = mock
	const [isPlaying, setIsPlaying] = useState(true)
	const [currentTrack, setCurrentTrack] = useState(tracks[position])
	console.log(tracks, 'tracks in player')

	const audioElem = useRef<any>()
	const clickRef = useRef<any>()
	const volumeRef = useRef<any>()

	useLayoutEffect(() => {
		setCurrentTrack(tracks[position])
		setTimeout(() => {
			audioElem.current.play()
		}, 200)
	}, [tracks, position])

	useLayoutEffect(() => {
		if (isPlaying) {
			audioElem?.current?.play()
		} else {
			audioElem?.current?.pause()
		}
	}, [isPlaying])

	useLayoutEffect(() => {
		setIsPlaying(true)
	}, [])

	const PlayPause = () => {
		setIsPlaying(prev => !prev)
	}

	const onPlaying = () => {
		const duration = audioElem?.current?.duration
		const currentTime = audioElem?.current?.currentTime
		setCurrentTrack({
			...currentTrack,
			progress: (currentTime / duration) * 100,
			length: duration
		})
	}

	async function checkWidth(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		await audioElem.current.play()
		if (!audioElem.current.paused) audioElem.current.pause()

		console.log(audioElem.current.paused)
		let width = clickRef?.current?.clientWidth
			? clickRef?.current?.clientWidth
			: 0
		const offset = e.nativeEvent?.offsetX
		const divProgress = (offset / width) * 100
		const newCurrentTime = (divProgress / 100) * currentTrack.length
		audioElem.current.currentTime = isFinite(newCurrentTime)
			? newCurrentTime
			: 100

		if (audioElem.current.paused) await audioElem.current.play()
	}

	const checkVolume = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		let width = volumeRef?.current?.clientWidth
		const offset = e.nativeEvent?.offsetX
		const divProgress = (offset / width) * 100
		const newVolume = divProgress / 100
		audioElem.current.volume = newVolume
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

	useEffect(() => {
		if (audioElem?.current?.currentTime === currentTrack?.length) skipNext()
	}, [audioElem?.current?.currentTime])

	return (
		<>
			<audio
				src={currentTrack?.url}
				ref={audioElem}
				onTimeUpdate={onPlaying}
			/>
			<div className={styles.playerContainer}>
				<div className={styles.track}>
					<img src={currentTrack?.favicon} />
					<div className={styles.title}>
						<span className={styles.name}>
							{currentTrack?.name}
						</span>
						<span className={styles.artist}>
							{currentTrack?.country}
						</span>
					</div>
				</div>
				<div className={styles.controls}>
					<LikeButton isLiked={currentTrack?.isLiked} />
					<RoundButton
						icon={<SkipPreviousRoundedIcon />}
						onClick={skipPrevious}
						className={styles.controlButton}
					/>
					<PlayButton isPlaying={isPlaying} onClick={PlayPause} />
					<RoundButton
						icon={<SkipNextRoundedIcon />}
						onClick={skipNext}
						className={styles.controlButton}
					/>
					<MixRoundButton className={styles.controlButton} />
				</div>
				{isFinite(audioElem?.current?.duration) ? (
					<div
						className={styles.navigation}
						onClick={checkWidth}
						ref={clickRef}
					>
						<div>
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
						</div>
					</div>
				) : null}
				<div
					className={styles.volume}
					onClick={checkVolume}
					ref={volumeRef}
				>
					<RoundButton
						icon={<VolumeUpRoundedIcon />}
						className={styles.volumeButton}
					/>
					<div className={styles.volumeController}>
						<div
							className={styles.volumeBar}
							style={{
								width: `${
									audioElem.current?.volume * 100 || 0
								}%`
							}}
						>
							<div className={styles.pointer}></div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
