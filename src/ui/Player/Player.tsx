import {
	BsFillPauseBtnFill,
	BsFillPlayCircleFill,
	BsFillSkipEndCircleFill,
	BsFillSkipStartBtnFill,
	BsFillSkipStartCircleFill
} from 'react-icons/bs'
import React, { useEffect, useRef, useState } from 'react'
import styles from './Player.module.scss'
import { PlayerProps } from './types'
import useSound from 'use-sound'

const mock = [
	{
		id: 1,
		name: '1',
		url: 'https://muz-tv.ru/storage/files/chart-tracks/1601977001.mp3'
	},
	{
		id: 2,
		name: '2',
		url: 'https://muz-tv.ru/storage/files/chart-tracks/1601897430.mp3'
	},
	{
		id: 3,
		name: '3',
		url: 'https://muz-tv.ru/storage/files/chart-tracks/1593435067.mp3'
	}
]

export default function Player({ tracks }: PlayerProps) {
	tracks = mock
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTrack, setCurrentTrack] = useState(tracks[0])

	useEffect(() => {
		setCurrentTrack(tracks[0])
	}, [tracks])

	const audioElem = useRef()
	const clickRef = useRef()

	useEffect(() => {
		if (isPlaying) {
			audioElem?.current?.play()
		} else {
			audioElem?.current?.pause()
		}
	}, [isPlaying])

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

	const checkWidth = (e: Event) => {
		let width = clickRef.current.clientWidth
		const offset = e.nativeEvent.offsetX
		const divProgress = (offset / width) * 100
		const newCurrentTime = (divProgress / 100) * currentTrack?.length
		audioElem.current.currentTime = isFinite(newCurrentTime)
			? newCurrentTime
			: 100
	}

	async function skipBack() {
		const index = tracks.findIndex(track => track.id === currentTrack.id)
		index === 0
			? setCurrentTrack(tracks[tracks.length - 1])
			: setCurrentTrack(tracks[index - 1])
		audioElem.current.currentTime = 0
		await audioElem.current.load()
		audioElem.current.play()
	}

	async function skipNext() {
		const index = tracks.findIndex(track => track.id === currentTrack.id)
		index === tracks.length - 1
			? setCurrentTrack(tracks[0])
			: setCurrentTrack(tracks[index + 1])
		audioElem.current.currentTime = 0
		await audioElem.current.load()
		audioElem.current.play()
	}

	return (
		<>
			<audio
				src={currentTrack?.url}
				// src="https://muz-tv.ru/storage/files/chart-tracks/1601977001.mp3"
				ref={audioElem}
				onTimeUpdate={onPlaying}
			/>
			<div className={styles.playerContainer}>
				<div className={styles.title}>
					<span>{currentTrack?.name}</span>
				</div>
				<div className={styles.navigation}>
					<div
						className={styles.navigationWrapper}
						onClick={checkWidth}
						ref={clickRef}
					>
						<span>{`Current time ${Math.floor(
							audioElem?.current?.currentTime
						)}`}</span>
						<span>{`Duration ${Math.floor(
							audioElem?.current?.duration
						)}`}</span>
						<div
							className={styles.seekBar}
							style={{
								width: `${currentTrack?.progress || 0}%`
							}}
						></div>
					</div>
				</div>
				<div className={styles.controls}>
					<BsFillSkipStartCircleFill
						className={styles.btnAction}
						onClick={skipBack}
					/>
					{isPlaying ? (
						<BsFillPauseBtnFill onClick={PlayPause} />
					) : (
						<BsFillPlayCircleFill
							className={styles.btnAction}
							onClick={PlayPause}
						/>
					)}
					<BsFillSkipEndCircleFill
						className={styles.btnAction}
						onClick={skipNext}
					/>
				</div>
			</div>
		</>
	)
}
