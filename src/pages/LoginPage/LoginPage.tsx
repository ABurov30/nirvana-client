import {
	Box,
	Button,
	Container,
	CssBaseline,
	TextField,
	Typography
} from '@mui/material'
import { loginUserThunk } from '../../redux/slices/users/thunkActions'
import { LoginForm } from '../../ui/LoginForm/LoginForm'
import { useAppDispatch } from '../../redux/hooks'
import { useNavigate } from 'react-router-dom'
import styles from './LoginPage.module.scss'
import React from 'react'

export default function LoginPage(): JSX.Element {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	// const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
	// 	event.preventDefault()
	// 	const data = Object.fromEntries(new FormData(event.target))
	// 	const res = dispatch(loginUserThunk(data))
	// 	if (res) navigate('/')
	// }

	const fields = [
		{
			placeholder: 'Name',
			name: 'name',
			type: 'name',
			required: true
		},
		{
			placeholder: 'E-mail',
			name: 'email',
			type: 'email',
			required: true
		},
		{
			placeholder: 'password',
			name: 'password',
			type: 'password',
			required: true
		}
	]

	const buttonsText = ['Submit']

	return (
		<div className={styles.container}>
			<LoginForm fields={fields} buttonsText={buttonsText} />
		</div>
	)
}
