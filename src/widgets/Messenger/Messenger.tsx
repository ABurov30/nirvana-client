//@ts-nocheck
import { useState } from 'react'

import ChatIcon from '@mui/icons-material/Chat'

import { useAppSelector } from 'shared/Redux/hooks'

import styles from './Messenger.module.scss'

export const Messenger = () => {
	const [isOpen, setIsOpen] = useState(false)
	const user = useAppSelector(state => state.user)
	const { theme } = useAppSelector(state => state.app)

	return (
		<>
			{isOpen ? (
				<>
					<div
						className={styles.shadow}
						onClick={() => setIsOpen(false)}
					></div>
					<div className={styles.messenger}>
						<iframe
							width="100%"
							height="100%"
							id="messenger"
							src={import.meta.env.VITE_MESSENGER_IFRAME_URL}
							onLoad={() => {
								const messageWindow =
									document.querySelector('#messenger')
								messageWindow.contentWindow.postMessage(
									{ message: 'init', user, theme },
									import.meta.env.VITE_MESSENGER_IFRAME_URL
								)
							}}
						/>
					</div>
				</>
			) : (
				<button
					className={styles.button}
					onClick={() => setIsOpen(true)}
				>
					<ChatIcon />
				</button>
			)}
		</>
	)
}
