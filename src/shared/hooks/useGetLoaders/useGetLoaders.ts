import { useGetLoadersArgs } from './types'


export function useGetLoaders({
	offset,
	setOffset,
	dispatch,
	thunk,
	user
}: useGetLoadersArgs) {
	const loadPrev = () => {
		if (offset >= 5) {
			setOffset(prev => prev - 5)
			dispatch(thunk(offset, user.id))
		} else {
			dispatch(thunk(0, user.id))
		}
	}

	const loadNext = () => {
		setOffset(prev => prev + 5)
		dispatch(thunk(offset, user.id))
	}

	return { loadNext, loadPrev }
}
