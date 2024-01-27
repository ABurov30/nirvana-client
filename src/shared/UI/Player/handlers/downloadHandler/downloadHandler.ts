import { Track } from 'entities/Track/types'

import { downloadResource } from 'shared/utils/downloadResource'

export function downloadHandler(currentTrack: Track) {
	downloadResource(
		currentTrack.url,
		`${currentTrack.title} ${currentTrack.subTitle}.mp3`
	)
}
