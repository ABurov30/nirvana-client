import { changeTheme } from 'entities/App/slice'
import { Theme } from 'entities/App/types'

import { useAppDispatch, useAppSelector } from 'shared/Redux/hooks'

import styles from './ThemeSwitcher.module.scss'

export default function ThemeSwitcher() {
	const { theme } = useAppSelector(state => state.app)

	const dispatch = useAppDispatch()
	return (
		<label className={styles.switch}>
			<input
				className={styles.input}
				type={'checkbox'}
				checked={theme === Theme.dark}
				onChange={() =>
					dispatch(
						changeTheme(
							theme === Theme.light ? Theme.dark : Theme.light
						)
					)
				}
			></input>
			<span className={styles.slider}></span>
		</label>
	)
}
