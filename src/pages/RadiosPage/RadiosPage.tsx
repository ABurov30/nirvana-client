import { getAllRadiosThunk, searchRadioThunk } from './radiosThunk'
import { useGetAllRadios } from '../../hooks/useGetAllRadios'
import { useAppSelector } from '../../redux/hooks'
import React, { lazy, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Form from '../../ui/Form/Form'
const MediaCard = lazy(() => import('../../ui/MediaCard'))


export default function RadiosPage(): JSX.Element {
	const radios = useGetAllRadios()

	return (
		<>
			<Form />
			<div className="cards-container">
				{radios?.map(el => (
					<MediaCard key={el.id} el={el} />
				))}
			</div>
		</>
	)
}
