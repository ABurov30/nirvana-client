//@ts-ignore
import styles from './CodeForm.module.scss'
import React, { useState } from 'react'

import { onSubmit } from './onSubmit'
import { useAppDispatch } from '../../../../shared/Redux/hooks'
import { useNavigate } from 'react-router-dom'
import { BlockButton } from 'nirvana-uikit'
import CodeInput from '../../../Inputs/CodeInput/CodeInput'

function CodeForm() {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const [values, setValues] = useState(['', '', '', '', '', ''])
	return (
		<div className={styles.form}>
			<CodeInput values={values} setValues={setValues} />
			<BlockButton
				text="Send code"
				type="button"
				onClick={() => onSubmit(values.join(''), dispatch, navigate)}
			/>
		</div>
	)
}

export default CodeForm
