import styles from './ImgSlider.module.scss'
import React from 'react'

function ImgSlider() {
	return (
		<div className={styles.slideshow}>
			<img
				className={styles.slideshowImage}
				src="/img/girl-gc9fe78fac_640.jpg"
			/>
			<img
				className={styles.slideshowImage}
				src="/img/live-music-g6988d81c0_640.jpg"
			/>

			<img
				className={styles.slideshowImage}
				src="/img/man-g27e356c82_640.jpg"
			/>
		</div>
	)
}

export default ImgSlider
