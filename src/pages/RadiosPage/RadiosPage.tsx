import {
	HomeNavbarButton,
	LikeRoundButton,
	MixBlockButton,
	Play,
	PlayBlockButton,
	ThemeSlider,
	UserPanel,
	VolumeSlider
} from 'radio-app-uikit'
import { useGetAllRadios } from '../../hooks/useGetAllRadios'
import React, { lazy, useEffect } from 'react'
import Form from '../../ui/Form/Form'
const MediaCard = lazy(() => import('../../ui/MediaCard'))

export default function RadiosPage(): JSX.Element {
	const radios = useGetAllRadios()

	return (
		<>
			<LikeRoundButton />
			<PlayBlockButton />
			<ThemeSlider />
			<UserPanel name={'fdaf'} nickname="fdsa" amountOfMessages={3} />
			<VolumeSlider />
			<HomeNavbarButton/>
			<MixBlockButton />
			{/* <Play /> */}
			<Form />
			<div className="cards-container">
				{radios?.map(el => (
					<MediaCard key={el.id} el={el} />
				))}
			</div>
		</>
	)
}
