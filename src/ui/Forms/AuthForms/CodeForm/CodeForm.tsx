//@ts-ignore
import styles from './CodeForm.module.scss'
import React, { useState } from 'react'

import { onSubmit } from './onSubmit'
import { useAppDispatch } from '../../../../shared/Redux/hooks'
import { useNavigate } from 'react-router-dom'
import { BlockButton } from 'nirvana-uikit'
import ReactCodeInput from 'react-code-input'

function CodeForm() {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const [value, setValue] = useState('')
	return (
		<div className={styles.form}>
			<ReactCodeInput
				fields={6}
				value={value}
				onChange={setValue}
				name="code"
				inputMode="numeric"
			/>
			<BlockButton
				text="Send code"
				type="button"
				onClick={() => onSubmit(value, dispatch, navigate)}
			/>
		</div>
	)
}

export default CodeForm
