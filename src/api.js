import axios from "axios";

const api = axios.create({
	baseURL: 'https://deckofcardsapi.com/api/deck/'
});

export const createDeckAndDraw = async () => {
	const { data } = await api.get('new/shuffle/', {
		params: {
			deck_count: 1,
			jokers_enabled: true
		}
	});

	const { deck_id: deckId } = data;

	// PLAYER 1 DRAWS 27 CARDS
	const { data: cardResponse } = await api.get(`${deckId}/draw/`, {
		params: {
			count: 27
		}
	});

	// PLAYER 2 DRAWS 27 CARDS
	const { data: cardResponse2 } = await api.get(`${deckId}/draw/`, {
		params: {
			count: 27
		}
	});
	console.log(cardResponse2)

	console.log(cardResponse)


	const cards = cardResponse.cards
	const cards2 = cardResponse2.cards

	return { deckId, cards, cards2 };
};



