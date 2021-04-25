import React, {  } from 'react'
import CSS from 'csstype'

interface Props {
	onClick: React.MouseEventHandler<HTMLDivElement>
	onDoubleClick: React.MouseEventHandler<HTMLDivElement>
}
const FlatCircleButton = (props: Props) => {

	const style: CSS.Properties = {
		backgroundColor: '#babecafe',
		border: '3px solid #cafebabe',
		height: '100px',
		width: '100px',
		margin: '5px',
	}

	return (
		<div 
			style={style} 
			onClick={props.onClick}
			onDoubleClick={props.onDoubleClick}
		/>
	)
}

export default FlatCircleButton
