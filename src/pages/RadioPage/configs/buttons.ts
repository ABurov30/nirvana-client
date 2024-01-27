import { IBlockButtonProps } from 'nirvana-uikit/dist/ui/Buttons/BlockButtons/BlockButton/types'

import { t } from 'i18next'

export const buttons = (): IBlockButtonProps[] => [
	{
		text: t('Shared.search'),
		type: 'submit'
	}
]
