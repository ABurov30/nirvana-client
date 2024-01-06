export function forceDownload(blob: string, filename: string) {
	const a = document.createElement('a')
	a.download = filename
	a.href = blob
	document.body.appendChild(a)
	a.click()
	a.remove()
}
