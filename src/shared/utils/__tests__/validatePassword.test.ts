import { beforeEach, describe, expect, it, vi } from 'vitest'

import { validatePassword } from '../validatePassword'

// Мокаем dispatch функцию
const mockDispatch = vi.fn()

describe('validatePassword', () => {
	beforeEach(() => {
		vi.clearAllMocks()
	})

	it('должен возвращать true для валидных паролей', () => {
		const validPassword = 'ValidPass123!'
		const repeatPassword = 'ValidPass123!'

		expect(
			validatePassword(validPassword, repeatPassword, mockDispatch)
		).toBe(true)
	})

	it('должен возвращать false для паролей без заглавных букв', () => {
		const invalidPassword = 'invalidpass123!'
		const repeatPassword = 'invalidpass123!'

		expect(
			validatePassword(invalidPassword, repeatPassword, mockDispatch)
		).toBe(false)
		expect(mockDispatch).toHaveBeenCalledWith(
			expect.objectContaining({
				type: 'notification/setNotification',
				payload: {
					message: 'Alert.passwordValidationError',
					severity: 'error'
				}
			})
		)
	})

	it('должен возвращать false для паролей без строчных букв', () => {
		const invalidPassword = 'INVALIDPASS123!'
		const repeatPassword = 'INVALIDPASS123!'

		expect(
			validatePassword(invalidPassword, repeatPassword, mockDispatch)
		).toBe(false)
	})

	it('должен возвращать false для паролей без цифр', () => {
		const invalidPassword = 'InvalidPass!'
		const repeatPassword = 'InvalidPass!'

		expect(
			validatePassword(invalidPassword, repeatPassword, mockDispatch)
		).toBe(false)
	})

	it('должен возвращать false для паролей без специальных символов', () => {
		const invalidPassword = 'InvalidPass123'
		const repeatPassword = 'InvalidPass123'

		expect(
			validatePassword(invalidPassword, repeatPassword, mockDispatch)
		).toBe(false)
	})

	it('должен возвращать false для паролей короче 8 символов', () => {
		const invalidPassword = 'Val1!'
		const repeatPassword = 'Val1!'

		expect(
			validatePassword(invalidPassword, repeatPassword, mockDispatch)
		).toBe(false)
	})

	it('должен возвращать false когда пароли не совпадают', () => {
		const password = 'ValidPass123!'
		const differentPassword = 'DifferentPass123!'

		expect(
			validatePassword(password, differentPassword, mockDispatch)
		).toBe(false)
		expect(mockDispatch).toHaveBeenCalledWith(
			expect.objectContaining({
				type: 'notification/setNotification',
				payload: {
					message: 'Alert.passwordMatchError',
					severity: 'error'
				}
			})
		)
	})

	it('должен вызывать dispatch с правильными уведомлениями об ошибках', () => {
		const invalidPassword = 'weak'
		const repeatPassword = 'weak'

		validatePassword(invalidPassword, repeatPassword, mockDispatch)

		expect(mockDispatch).toHaveBeenCalledWith(
			expect.objectContaining({
				type: 'notification/setNotification',
				payload: {
					message: 'Alert.passwordValidationError',
					severity: 'error'
				}
			})
		)
		expect(mockDispatch).toHaveBeenCalledWith(
			expect.objectContaining({
				type: 'notification/setIsOpen',
				payload: true
			})
		)
	})

	it('не должен вызывать dispatch для валидных паролей', () => {
		const validPassword = 'ValidPass123!'
		const repeatPassword = 'ValidPass123!'

		validatePassword(validPassword, repeatPassword, mockDispatch)

		expect(mockDispatch).not.toHaveBeenCalled()
	})
})
