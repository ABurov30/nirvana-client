import React, { useState } from 'react'
//@ts-ignore
import styles from './CodeInput.module.scss'
import { CodeInputProps } from './types'

const CodeInput = ({ values, setValues }: CodeInputProps) => {
	const handleChange = (
		index: number,
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const newValues = [...values]
		newValues[index] = event.target.value
		setValues(newValues)
	}

	return (
		<div className={styles.code}>
			{values.map((value, index) => (
				<input
					key={index}
					maxLength={1}
					value={value}
					onChange={e => handleChange(index, e)}
					className="input"
					name="text"
					type="text"
				/>
			))}
		</div>
	)
}

export default CodeInput
