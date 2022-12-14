import { atom, selector } from "recoil";
import naver from "../public/assets/naver.png";
import firebase from "../public/assets/firebase.png";
import loading from "../public/assets/loading.png";

interface IsCard {
  id: number;
  src: any;
  title: string;
  sort: "API" | "Materials";
}

const cardsState = atom<IsCard[]>({
  key: "cardsState",
  default: [
    { id: 0, src: naver, title: "Naver", sort: "API" },
    {
      id: 1,
      src: firebase,
      title: "Firebase",
      sort: "API",
    },
    {
      id: 2,
      src: loading,
      title: "Loading",
      sort: "Materials",
    },
  ],
});

export const originCardsState = selector<IsCard[]>({
  key: "originCardsState",
  get: ({ get }) => {
    const cards = get(cardsState);
    return cards;
  },
});
