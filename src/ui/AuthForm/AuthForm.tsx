import React, { FormEvent, FormEventHandler } from 'react'
import { IFormButtons, IFormFields } from './types'
import styles from './AuthForm.module.scss'

interface IFormProps {
	fields: IFormFields[]
	buttons: IFormButtons[]
	onSubmit: FormEventHandler<HTMLFormElement>
}

export function AuthForm({ fields, buttons, onSubmit }: IFormProps) {
	let i = fields.length + buttons.length + 1
	let j = buttons.length + 1
	return (
		<form
			className={styles.form}
			onSubmit={(e: FormEvent<HTMLFormElement>) => onSubmit(e)}
		>
			<ul className={styles.wrapper}>
				{fields.map(field => {
					if (i > buttons.length) {
						i--
						return (
							<div
								style={{ '--i': i } as React.CSSProperties}
								className="blured"
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
