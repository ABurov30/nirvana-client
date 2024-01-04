import { useEffect } from 'react'
import { Theme } from '../../entities/Theme/types'
import { useAppSelector } from '../Redux/hooks'
import { theme } from 'antd'

function useTheme() {
	const { theme } = useAppSelector(state => state.theme)

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

function recolor(theme: Theme['theme']) {
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