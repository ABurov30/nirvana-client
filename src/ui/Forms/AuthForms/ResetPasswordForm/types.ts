import { LoginForm } from '../LoginForm/types'

export type ResetPasswordFormProps = {
	isVisible: boolean
	setIsVisible: (value: boolean) => void
}

export interface ResetPasswordForm extends Pick<LoginForm, 'password'> {
	repeatPassword: string
}
