import { t } from 'i18next'

import { Theme } from 'entities/App/types'

export const themesOptions = () => [
	{
		label: t('SettingsPage.light'),
		value: Theme.light
	},
	{ label: t('SettingsPage.dark'), value: Theme.dark }
]
