import { getAllRadiosThunk, searchRadioThunk } from './radiosThunk'
import { useGetAllRadios } from '../../hooks/useGetAllRadios'
import { useAppSelector } from '../../redux/hooks'
import React, { lazy, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Form from '../../ui/Form/Form'
import LeftArrowButton from '../../ui/LeftArrowButton/LeftArrowButton'
import LikeButton from '../../ui/LikeButton/LikeButton'
import ShareButton from '../../ui/ShareButton/ShareButton'
const MediaCard = lazy(() => import('../../ui/MediaCard'))


export default function RadiosPage(): JSX.Element {
	const radios = useGetAllRadios()

	return (
		<>
			<LeftArrowButton/>
			<LikeButton/>
			<ShareButton/>
			<Form />
			<div className="cards-container">
				{radios?.map(el => (
					<MediaCard key={el.id} el={el} />
				))}
			</div>
		</>
	)
}
