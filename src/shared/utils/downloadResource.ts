import { forceDownload } from './forceDownload'

import { request } from '../Request/Requets'

export function downloadResource(url: string, filename: string) {
	request
		.sendRequest({
			url,
			responseType: 'blob'
		})
		.then(response => response?.data)
		.then(blob => {
			const blobUrl = URL.createObjectURL(
				new Blob([blob], {
					type: 'audio/mpeg'
				})
			)

			forceDownload(blobUrl, filename)
		})
		.catch(e => console.error(e))
}
