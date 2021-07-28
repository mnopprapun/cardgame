import React, { useState, useEffect } from "react";
import { createDeckAndDraw } from "./components/api";

export default function CardGameBoard() {
  const [cardImageUrl, setcardImageUrl] = useState(null);
  const [cardValue, setcardValue] = useState(null);
  const [deckId, setdeckId] = useState(null);

  useEffect(() => {
    createDeckAndDraw();
  }, []);

  return <div>testing</div>;
}
