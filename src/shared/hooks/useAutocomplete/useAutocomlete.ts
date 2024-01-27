import { useEffect, useState } from 'react'

import { request } from 'shared/Request/Requets'

export function useAutocomplete(path: string) {
	const [options, setOptions] = useState<string[]>([])

	useEffect(() => {
		request
			.sendRequest({
				url: path
			})
			.then(res => setOptions(res.data))
			.catch(e => console.error(e))
	}, [])

	return { options, setOptions }
}
