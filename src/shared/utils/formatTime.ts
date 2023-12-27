export const formatTime = (seconds: number) => {
	const minutes = Math.floor(seconds / 60)
	const remainingSeconds = Math.floor(seconds % 60)
	const formattedTime = `${minutes}:${remainingSeconds
		.toString()
		.padStart(2, '0')}`
	return formattedTime
}
