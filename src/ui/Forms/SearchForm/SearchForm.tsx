import React, { memo } from 'react'

import { BlockButton } from 'nirvana-uikit'

import { FormProps } from './type'

import { AutoComplete } from '../../Inputs/AutoComplete/AutoComplete'

import styles from './SearchForm.module.scss'

export const SearchForm = memo(function SearchForm({
	fields,
	buttons,
	onSubmit
}: FormProps) {
	let i = fields.length + buttons.length + 1
	let j = buttons.length + 1
	return (
		<form className={styles.form} onSubmit={onSubmit}>
			{fields.map(field => {
				if (i > buttons.length) {
					i--
					return (
						<AutoComplete
							key={`${field.label}${field.name}`}
							field={field}
						/>
					)
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
})
