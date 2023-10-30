import { useGetAllRadios } from '../../hooks/useGetAllRadios'
import Radios from '../../widgets/Radios/Radios'
import Form from '../../ui/Form/Form'
import React, { lazy } from 'react'
const MediaCard = lazy(() => import('../../ui/MediaCard'))

export default function RadiosPage(): JSX.Element {
	const radios = useGetAllRadios()

	return (
		<>
			<Form />
			<Radios />
		</>
	)
}
