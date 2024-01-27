import { LoginForm } from '../LoginForm/types'
import { ResetPasswordForm } from '../ResetPasswordForm/types'

export type SignUpFormProps = {
	isVisible: boolean
	setIsVisible: (value: boolean) => void
}

export interface SignUpForm extends LoginForm, ResetPasswordForm {
	name: string
}
