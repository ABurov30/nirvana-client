import { useEffect } from 'react'

import { Theme } from 'entities/App/types'

import { useAppSelector } from 'shared/Redux/hooks'

function useTheme() {
	const { theme } = useAppSelector(state => state.app)

	useEffect(() => {
		recolor(theme)
	}, [])

	useEffect(() => {
		recolor(theme)
		localStorage.setItem('theme', theme)
	}, [theme])
	return theme === 'light' ? 'dark' : 'light'
}

export default useTheme

function recolor(theme: Theme) {
	const body = document.querySelector('body')
	if (!body) return
	if (theme === 'dark') {
		body.classList.remove('light')
		body.className += ' dark'
	} else if (theme === 'light') {
		body.classList.remove('dark')
		body.className += ' light'
	}
}
