import React, { useState } from 'react'
import ReactCodeInput from 'react-code-input'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { BlockButton } from 'nirvana-uikit'

import { onSubmit } from './onSubmit'

import { useAppDispatch } from '../../../../shared/Redux/hooks'

import styles from './CodeForm.module.scss'

function CodeForm() {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const { t } = useTranslation()
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
				text={t('CodePage.sendCode')}
				type="button"
				onClick={() => onSubmit(value, dispatch, navigate)}
			/>
		</div>
	)
}

export default CodeForm
