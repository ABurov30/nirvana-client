import AnimatedCursor from 'react-animated-cursor'

function Cursor() {
	return (
		<AnimatedCursor
			innerSize={12}
			outerSize={16}
			outerAlpha={0.5}
			innerScale={1}
			outerScale={2}
			innerStyle={{ backgroundColor: '#5ee9bf', filter: 'blur(2px)' }}
			outerStyle={{ backgroundColor: '#6360ff', filter: 'blur(5px)' }}
			clickables={[
				'a',
				'input[type="text"]',
				'input[type="email"]',
				'input[type="number"]',
				'input[type="submit"]',
				'input[type="image"]',
				'label[for]',
				'select',
				'textarea',
				'button',
				'.link'
			]}
		/>
	)
}

export default Cursor
