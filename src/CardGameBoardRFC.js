import React, { useState, useEffect } from 'react'
import { createDeckAndDraw } from './api'

export default function CardGameBoard() {
const [deck, setDeck] = useState({})

useEffect( () => {
	createDeckAndDraw()
}, [])

	return (
		<div>
			testing
		</div>
	)
}
