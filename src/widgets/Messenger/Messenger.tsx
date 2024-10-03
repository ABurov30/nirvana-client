import { useState } from 'react'

import { BlockButton } from 'nirvana-uikit'

import { useAppSelector } from 'shared/Redux/hooks'

import styles from './Messenger.module.scss'

export const Messenger = () => {
	const [isOpen, setIsOpen] = useState(false)
	const user = useAppSelector(state => state.user)

	return (
		<>
			{isOpen && (
				<div className={styles.messenger}>
					<iframe
						width="100%"
						height="100%"
						id="messenger"
						src="http://localhost:5174/"
						onLoad={() => {
							const messageWindow =
								document.querySelector('#messenger')
							messageWindow.contentWindow.postMessage(
								{ message: 'init', user },
								'*'
							)
						}}
					/>
				</div>
			)}
			<BlockButton
				text="Open messenger"
				onClick={() => setIsOpen(prev => !prev)}
			/>
		</>
	)
}
