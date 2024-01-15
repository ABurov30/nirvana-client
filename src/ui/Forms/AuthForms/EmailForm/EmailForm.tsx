//@ts-ignore
import styles from './EmailForm.module.scss'
import React from 'react'

import { onSubmit } from './onSubmit'
import { useAppDispatch } from '../../../../shared/Redux/hooks'
import { useNavigate } from 'react-router-dom'

function EmailForm() {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	return (
		<form
			className={styles.form}
			onSubmit={e => onSubmit(e, dispatch, navigate)}
		>
			<ul className={styles.wrapper}>
				<div
					style={{ '--i': 2 } as React.CSSProperties}
					className={styles.blured}
				>
					<li style={{ '--i': 2 } as React.CSSProperties}>
						<input
							className={styles.input}
							placeholder={'E-mail'}
							name={'email'}
						/>
					</li>
				</div>
				<div
					style={{ '--i': 1 } as React.CSSProperties}
					className={styles.blured}
				>
					<button
						style={{ '--i': 1 } as React.CSSProperties}
						type={'submit'}
						aria-label="Submit"
					>
						{'Reset password'}
					</button>
				</div>
			</ul>
		</form>
	)
}

export default EmailForm
