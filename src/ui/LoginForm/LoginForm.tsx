import styles from './LoginForm.module.scss'
import { IForm } from './types'
import React from 'react'

interface IFormProps {
	fields: IForm[]
	buttonsText: string[]
}

export function LoginForm({ fields, buttonsText }: IFormProps) {
	let i = fields.length + buttonsText.length + 1
	let j = buttonsText.length + 1
	return (
			<form className={styles.form}>
				<ul className={styles.wrapper}>
					{fields.map(field => {
						if (i > buttonsText.length) {
							i--
							return (
								<div
									style={{ '--i': i } as React.CSSProperties}
									className="blured"
								>
									<li
										style={
											{ '--i': i } as React.CSSProperties
										}
									>
										<input
											className={styles.input}
											placeholder={field.placeholder}
											required={field.required}
											name={field.name}
											type={field.type}
										/>
									</li>
								</div>
							)
						} else {
							i--
						}
					})}
					{buttonsText.map(buttonText => {
						if (j > 0) {
							j--
							return (
								<div
									style={{ '--i': j } as React.CSSProperties}
									className={styles.blured}
								>
									<button
										style={
											{ '--i': j } as React.CSSProperties
										}
									>
										{buttonText}
									</button>
								</div>
							)
						}
					})}
				</ul>
			</form>
	)
}
