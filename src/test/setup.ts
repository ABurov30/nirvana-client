import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Мокаем i18next
vi.mock('i18next', () => ({
	t: (key: string) => key
}))

// Мокаем react-i18next
vi.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: (key: string) => key,
		i18n: {
			changeLanguage: vi.fn()
		}
	})
}))

// Мокаем Redux store
vi.mock('shared/Redux/store', () => ({
	store: {
		getState: vi.fn(),
		dispatch: vi.fn(),
		subscribe: vi.fn()
	}
}))

// Мокаем axios
vi.mock('axios', () => ({
	default: {
		create: vi.fn(() => ({
			get: vi.fn(),
			post: vi.fn(),
			put: vi.fn(),
			delete: vi.fn()
		}))
	}
}))
