import { describe, expect, it } from 'vitest'

import { formatTime } from '../formatTime'

describe('formatTime', () => {
	it('должен форматировать время в минуты и секунды', () => {
		expect(formatTime(0)).toBe('0:00')
		expect(formatTime(30)).toBe('0:30')
		expect(formatTime(60)).toBe('1:00')
		expect(formatTime(90)).toBe('1:30')
		expect(formatTime(125)).toBe('2:05')
		expect(formatTime(3661)).toBe('61:01')
	})

	it('должен правильно обрабатывать отрицательные числа', () => {
		expect(formatTime(-30)).toBe('-1:-30')
		expect(formatTime(-60)).toBe('-1:00')
	})

	it('должен правильно обрабатывать десятичные числа', () => {
		expect(formatTime(30.7)).toBe('0:30')
		expect(formatTime(60.9)).toBe('1:00')
	})

	it('должен правильно обрабатывать большие числа', () => {
		expect(formatTime(3600)).toBe('60:00')
		expect(formatTime(7200)).toBe('120:00')
	})
})
