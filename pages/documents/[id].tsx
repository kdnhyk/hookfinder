import Image from "next/image";
import styled from "styled-components";

const CardBlock = styled.div``;

interface CardProps {
  doc?: any;
}

export default function Document({ doc }: CardProps) {
  console.log("Card");

  return <CardBlock></CardBlock>;
}
