import { Typography } from 'nirvana-uikit'

import { useAppSelector } from 'shared/Redux/hooks'
import CodeForm from 'shared/UI/Forms/AuthForms/CodeForm/CodeForm'

import styles from './CodePage.module.scss'
import { t } from 'i18next'

export default function CodePage(): JSX.Element {
	const { theme } = useAppSelector(state => state.app)

	return (
		<div className={styles.container}>
			<div
				className={`${styles.codeContainer} ${
					theme === 'light' ? styles.light : styles.dark
				}`}
			>
				<Typography text={t('CodePage.enterCode')} weight="semibold" />
				<CodeForm />
			</div>
		</div>
	)
}
