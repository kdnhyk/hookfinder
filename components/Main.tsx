import styled from "styled-components";
import Card from "./Card";
import Naver from "../assets/Naver.png";
import Firebase from "../assets/Firebase.png";
import { useRecoilState } from "recoil";
import { originCardsState } from "../store/Cards";

const MainBlock = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  .CardsWrapper {
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: 192px 192px 192px 192px;
    gap: 120px;
    margin: 250px 90px 45px 90px;
    padding: 0 12px;
  }
`;

export default function Main() {
  console.log("Main");

  const [cards] = useRecoilState(originCardsState);
  return (
    <MainBlock>
      <div className="CardsWrapper">
        {cards.map((card) => (
          <Card key={card.id} doc={card}></Card>
        ))}
      </div>
    </MainBlock>
  );
}
