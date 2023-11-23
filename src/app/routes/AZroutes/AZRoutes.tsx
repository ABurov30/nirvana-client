import AZLayout from '../../layout/AZLayout/AZLayout'
import { Route, Routes } from 'react-router-dom'
import React from 'react'

import RadioPage from '../../../pages/RadioPage/RadioPage'
import { AZRoutesProps } from './types'

function AZRoutes({ user }: AZRoutesProps) {
	return (
		<Routes>
			<Route path="/" element={<AZLayout user={user} />}>
				<Route path="/" element={<RadioPage />} />
			</Route>
		</Routes>
	)
}

export default AZRoutes
