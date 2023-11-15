import { useGetAllRadios } from '../../hooks/useGetAllRadios'
import { useAppSelector } from '../../services/Redux/hooks'
import Radios from '../../widgets/Radios/Radios'
import Form from '../../ui/Form/Form'
import React, { lazy } from 'react'
const MediaCard = lazy(() => import('../../ui/MediaCard'))

export default function MainPage(): JSX.Element {
	return (
		<>
			<Radios />
		</>
	)
}
