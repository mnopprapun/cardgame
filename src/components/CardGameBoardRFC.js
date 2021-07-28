import React, { useState, useEffect } from 'react'
import { createDeckAndDraw } from './components/api'

export default function CardGameBoard() {
const [deck, setDeck] = useState(null)

useEffect( () => {
	createDeckAndDraw()
}, [])

	return (
		<div>
			testing
		</div>
	)
}
