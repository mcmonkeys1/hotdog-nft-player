import React, { useEffect, useState } from 'react'
import './FlatSquareButton.css'

interface Props {
	onClick: React.MouseEventHandler<HTMLDivElement>
	onDoubleClick: React.MouseEventHandler<HTMLDivElement>
}
const FlatSquareButton = (props: Props) => {

	return (
		<div 
			className='flatStyleButton' 
			onClick={props.onClick}
			onDoubleClick={props.onDoubleClick}
		/>
	)
}

export default FlatSquareButton
