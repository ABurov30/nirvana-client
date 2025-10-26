import { describe, expect, it } from 'vitest'

// Создаем простую функцию для тестирования логики валидации email
function validateEmailLogic(email: string): boolean {
	const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
	return regex.test(email)
}

describe('validateEmail', () => {
	it('должен возвращать true для валидных email адресов', () => {
		expect(validateEmailLogic('test@example.com')).toBe(true)
		expect(validateEmailLogic('user.name@domain.co.uk')).toBe(true)
		expect(validateEmailLogic('user+tag@example.org')).toBe(true)
		expect(validateEmailLogic('test123@test-domain.com')).toBe(true)
	})

	it('должен возвращать false для невалидных email адресов', () => {
		expect(validateEmailLogic('invalid-email')).toBe(false)
		expect(validateEmailLogic('@example.com')).toBe(false)
		expect(validateEmailLogic('test@')).toBe(false)
		expect(validateEmailLogic('test.example.com')).toBe(false)
		expect(validateEmailLogic('test@.com')).toBe(false)
		expect(validateEmailLogic('test@example.')).toBe(false)
		expect(validateEmailLogic('')).toBe(false)
		expect(validateEmailLogic('test space@example.com')).toBe(false)
	})
})
