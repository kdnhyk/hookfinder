import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const CardBlock = styled.div`
  width: 192px;
  height: 192px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;

  .CardWrapper {
    width: 192px;
    height: 192px;
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    &:hover {
      animation: vibration 0.2s infinite;
      transform-origin: 96px 48px;
      animation-direction: alternate;
      animation-fill-mode: both;
      scale: calc(1.02);
      transition: all 0.2s ease-in-out;
      box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.25);
      @keyframes vibration {
        0% {
          transform: rotate(0.8deg);
        }
        100% {
          transform: rotate(-0.8deg);
        }
      }
      .ImageCover {
        background-color: rgba(215, 215, 215, 0.24);
        p {
          display: block;
        }
      }
    }
    img {
      border-radius: 16px;
    }
    .ImageCover {
      border-radius: 16px;
      width: 192px;
      height: 192px;
      color: white;
      background-color: inherit;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: end;
      p {
        width: 100%;
        text-align: center;
        display: none;
        font: 14px;
        font-weight: 200;
        margin-bottom: 10px;
        padding: 0 30px;
        white-space: nowrap;
        overflow-x: auto;
        -ms-overflow-style: none;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
`;

interface CardProps {
  doc?: any;
}

export default function Card({ doc }: CardProps) {
  console.log("Card");

  return (
    <CardBlock>
      <div className="CardWrapper">
        <Image src={doc.src} alt={"Logo"} width={192} height={192} />
        <div className="ImageCover">
          <p>
            {doc.title} | {doc.sort}
          </p>
        </div>
      </div>
    </CardBlock>
  );
}
