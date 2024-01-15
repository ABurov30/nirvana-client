//@ts-ignore
import styles from './PromoTitle.module.scss'
import { PromoTitleProps } from './types'
import React from 'react'

export default function PromoTitle({
	prePhrase,
	rotatedPhrases
}: PromoTitleProps) {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.contentContainer}>
					<p className={styles.contentContainerText}>{prePhrase}</p>

					<ul className={styles.contentContainerList}>
						{rotatedPhrases.map(phrase => (
							<li
								className={styles.contentContainerListItem}
								key={phrase}
							>
								{phrase}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
