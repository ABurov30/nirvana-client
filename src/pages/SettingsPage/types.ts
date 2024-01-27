import { EmailForm } from '../../shared/UI/Forms/AuthForms/EmailForm/types'

export interface UserInfoForm extends EmailForm {
	nickname: string
}
