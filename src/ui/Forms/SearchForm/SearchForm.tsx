import AutoComplete from '../../Inputs/AutoComplete/AutoComplete'
import { IFormProps } from '../AuthForm/types'
import styles from './SearchForm.module.scss'
import { BlockButton } from 'radio-app-uikit'
import React from 'react'

export default function SearchForm({ fields, buttons, onSubmit }: IFormProps) {
	let i = fields.length + buttons.length + 1
	let j = buttons.length + 1
	return (
		<form className={styles.form} onSubmit={onSubmit}>
			{fields.map(field => {
				if (i > buttons.length) {
					i--
					return <AutoComplete key={field.label} field={field} />
				}
			})}
			{buttons.map(button => {
				if (j > buttons.length) {
					j--
					return (
						<BlockButton
							key={button.text}
							type={button.type}
							text={button.text}
						/>
					)
				}
			})}
		</form>
	)
}
