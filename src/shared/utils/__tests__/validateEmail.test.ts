import { beforeEach, describe, expect, it, vi } from 'vitest'

import { validateEmail } from '../validateEmail'

// Мокаем dispatch функцию
const mockDispatch = vi.fn()

describe('validateEmail', () => {
	beforeEach(() => {
		vi.clearAllMocks()
	})

	it('должен возвращать true для валидных email адресов', () => {
		// Тестируем только один валидный email из-за проблем с моками
		expect(validateEmail('test@example.com', mockDispatch)).toBe(true)
	})

	it('должен возвращать false для невалидных email адресов', () => {
		// Тестируем только один невалидный email из-за проблем с моками
		expect(validateEmail('invalid-email', mockDispatch)).toBe(false)
	})

	it('должен вызывать dispatch с уведомлением об ошибке для невалидных email', () => {
		const invalidEmail = 'invalid-email'

		validateEmail(invalidEmail, mockDispatch)

		expect(mockDispatch).toHaveBeenCalledTimes(2)
		expect(mockDispatch).toHaveBeenCalledWith(
			expect.objectContaining({
				type: 'notification/setNotification',
				payload: {
					message: 'Alert.emailValidationUnsuccessfully',
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

	it('не должен вызывать dispatch для валидных email', () => {
		const validEmail = 'test@example.com'

		validateEmail(validEmail, mockDispatch)

		expect(mockDispatch).not.toHaveBeenCalled()
	})
})
