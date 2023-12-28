import { Navigate, Outlet } from 'react-router-dom'
import { IProps } from './type'
import React from 'react'

export default function PrivateRouter({
	children,
	redirectPath = '/auth/login',
	isAllowed
}: IProps): JSX.Element {
	if (!isAllowed) return <Navigate to={redirectPath} replace />
	return children || <Outlet />
}
