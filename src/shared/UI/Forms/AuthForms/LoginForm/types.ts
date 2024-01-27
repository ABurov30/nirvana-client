import { EmailForm } from '../EmailForm/types'

export interface LoginForm extends EmailForm {
	password: string
}
