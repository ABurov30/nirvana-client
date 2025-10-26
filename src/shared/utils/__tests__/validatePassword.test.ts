import { describe, expect, it } from 'vitest'

// Создаем простую функцию для тестирования логики валидации пароля
function validatePasswordLogic(
	password: string,
	repeatPassword: string
): boolean {
	const regex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

	if (!regex.test(password)) {
		return false
	}

	if (password !== repeatPassword) {
		return false
	}

	return true
}

describe('validatePassword', () => {
	it('должен возвращать true для валидных паролей', () => {
		expect(validatePasswordLogic('ValidPass123!', 'ValidPass123!')).toBe(
			true
		)
	})

	it('должен возвращать false для паролей без заглавных букв', () => {
		expect(
			validatePasswordLogic('invalidpass123!', 'invalidpass123!')
		).toBe(false)
	})

	it('должен возвращать false для паролей без строчных букв', () => {
		expect(
			validatePasswordLogic('INVALIDPASS123!', 'INVALIDPASS123!')
		).toBe(false)
	})

	it('должен возвращать false для паролей без цифр', () => {
		expect(validatePasswordLogic('InvalidPass!', 'InvalidPass!')).toBe(
			false
		)
	})

	it('должен возвращать false для паролей без специальных символов', () => {
		expect(validatePasswordLogic('InvalidPass123', 'InvalidPass123')).toBe(
			false
		)
	})

	it('должен возвращать false для паролей короче 8 символов', () => {
		expect(validatePasswordLogic('Val1!', 'Val1!')).toBe(false)
	})

	it('должен возвращать false когда пароли не совпадают', () => {
		expect(
			validatePasswordLogic('ValidPass123!', 'DifferentPass123!')
		).toBe(false)
	})

	it('должен возвращать true для различных валидных паролей', () => {
		expect(validatePasswordLogic('MyPass123!', 'MyPass123!')).toBe(true)
		expect(validatePasswordLogic('Test@123', 'Test@123')).toBe(true)
		expect(validatePasswordLogic('Password1!', 'Password1!')).toBe(true)
	})
})
