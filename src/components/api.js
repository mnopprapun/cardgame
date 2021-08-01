import axios from "axios";

const api = axios.create({
  baseURL: "https://deckofcardsapi.com/api/deck/",
});

export const createDeckAndDraw = async () => {
  const { data } = await api.get("new/shuffle/", {
    params: {
      deck_count: 1,
      jokers_enabled: true,
    },
  });

  const { deck_id: deckId } = data;

  const { data: cardResponse } = await api.get(`${deckId}/draw/`, {
    params: {
      count: 27,
    },
  });

  const { data: cardResponse2 } = await api.get(`${deckId}/draw/`, {
    params: {
      count: 27,
    },
  });

// const { data: piles } = await api.get(`${deckID}/pile/discardPile1/add/`)

  console.log(cardResponse);
  console.log(cardResponse2);

  const cards = cardResponse.cards;
  const cards2 = cardResponse2.cards;

  return { deckId, cards, cards2 };
};
