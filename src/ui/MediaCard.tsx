import { RadioType } from '../types/radioTypes'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { Button } from 'reactstrap'

type MediaCardProps = {
	el: RadioType
}

export default function MediaCard({ el }: MediaCardProps) {
	const navigate = useNavigate()
	const [showCard, setShowCard] = useState(false)
	const [showButton, setShowButton] = useState(false)

	const [isPlaying, setIsPlaying] = React.useState(false)

	const handleTogglePlay = () => {
		setIsPlaying(!isPlaying)
	}

	const navigateHandler = id => {
		navigate(`/${id}`)
	}

	const handleMouseEnter = () => {
		setShowButton(true)
	}

	const handleMouseLeave = () => {
		setShowButton(false)
	}

	return (
		<div className="media-card-container">
			<div
				className="media-card"
				onMouseEnter={() => setShowCard(true)}
				onMouseLeave={() => setShowCard(false)}
			>
				<div className="media-card-image-container">
					<img
						className="media-card-image"
						alt="Cover"
						src={el.favicon === '' ? '/img/cover.jpeg' : el.favicon}
					/>
				</div>
				<div className="media-card-content">
					<h5 className="media-card-title">{el.name}</h5>
					<p className="media-card-subtitle">
						{el.votes} Подписчиков
					</p>
					<p className="media-card-subtitle">{el.country}</p>
				</div>
				{isPlaying ? (
					<audio src={el?.url} controls autoPlay>
						Ваш браузер не поддерживает элемент аудио.
					</audio>
				) : (
					<button
						className="media-card-button"
						onClick={handleTogglePlay}
					>
						Слушать
					</button>
				)}
			</div>
		</div>
	)
}
