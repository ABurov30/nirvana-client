import LeftArrowButton from '../../ui/LeftArrowButton/LeftArrowButton'
import { getAllRadiosThunk, searchRadioThunk } from './radiosThunk'
import { useGetAllRadios } from '../../hooks/useGetAllRadios'
import ShareButton from '../../ui/ShareButton/ShareButton'
import LikeButton from '../../ui/LikeButton/LikeButton'
import { useAppSelector } from '../../redux/hooks'
import React, { lazy, useEffect } from 'react'
import { RoundButton } from 'radio-app-uikit'
import { useDispatch } from 'react-redux'
import Form from '../../ui/Form/Form'
const MediaCard = lazy(() => import('../../ui/MediaCard'))


export default function RadiosPage(): JSX.Element {
	const radios = useGetAllRadios()

	return (
		<>
			<RoundButton/>
			<Form />
			<div className="cards-container">
				{radios?.map(el => (
					<MediaCard key={el.id} el={el} />
				))}
			</div>
		</>
	)
}
