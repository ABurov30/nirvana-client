import { IFormButtons, IFormFields, IFormProps } from './types'
import React, { FormEvent, FormEventHandler } from 'react'
import styles from './AuthForm.module.scss'

export function AuthForm({ fields, buttons, onSubmit }: IFormProps) {
	let i = fields.length + buttons.length + 1
	let j = buttons.length + 1
	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<ul className={styles.wrapper}>
				{fields.map(field => {
					if (i > buttons.length) {
						i--
						return (
							<div
								style={{ '--i': i } as React.CSSProperties}
								className={styles.blured}
							>
								<li style={{ '--i': i } as React.CSSProperties}>
									<input
										className={styles.input}
										placeholder={field.placeholder}
										required={field.required}
										name={field.name}
										type={field.type}
										value={field.value}
										onChange={field.onChange}
										key={field.label}
									/>
								</li>
							</div>
						)
					} else {
						i--
					}
				})}
				{buttons.map(button => {
					if (j > 0) {
						j--
						return (
							<div
								style={{ '--i': j } as React.CSSProperties}
								className={styles.blured}
							>
								<button
									style={{ '--i': j } as React.CSSProperties}
									type={button.type}
									key={button.text}
									onClick={button.onClick}
								>
									{button.text}
								</button>
							</div>
						)
					}
				})}
			</ul>
		</form>
	)
}
