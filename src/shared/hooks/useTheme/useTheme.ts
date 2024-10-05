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
	return theme === Theme.light ? Theme.dark : Theme.light
}

export default useTheme

function recolor(theme: Theme) {
	const body = document.querySelector('body')
	if (!body) return
	if (theme === Theme.dark) {
		body.classList.remove(Theme.light)
		body.className += ` ${Theme.dark}`
	} else if (theme === Theme.light) {
		body.classList.remove(Theme.dark)
		body.className += ` ${Theme.light}`
	}
}
