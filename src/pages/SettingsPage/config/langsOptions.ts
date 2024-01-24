import { t } from "i18next";
import { Language } from "../../../entities/App/types";

export const langsOptions = () => [
	{
		label: t('SettingsPage.english'),
		value: Language.en
	},
	{
		label: t('SettingsPage.russian'),
		value: Language.ru
	}
]
