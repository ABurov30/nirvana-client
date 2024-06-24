import { Typography } from 'nirvana-uikit'

import { useAppSelector } from 'shared/Redux/hooks'
import EmailForm from 'shared/UI/Forms/AuthForms/EmailForm/EmailForm'

import styles from './EmailPage.module.scss'
import { t } from 'i18next'

export default function EmailPage(): JSX.Element {
	const { theme } = useAppSelector(state => state.app)

	return (
		<div className={styles.container}>
			<div
				className={`${styles.emailContainer} ${
					theme === 'light' ? '' : styles.dark
				}`}
			>
				<div className={styles.titleContainer}>
					<Typography
						text={t('EmailPage.enterEmail')}
						weight="semibold"
					/>
				</div>
				<div className={styles.formContainer}>
					<EmailForm />
				</div>
			</div>
		</div>
	)
}
