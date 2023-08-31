import React, { useState } from "react";
import styled from "styled-components";

const Slack = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const naver = () => {
    window.open("https://github.com/jominuk");
  };

  return (
    <StSlackBox>
      <CardContainer onClick={handleCardFlip}>
        <CardInner flipped={isFlipped ? "true" : "false"}>
          <CardFront>
            <p>Front of the Card</p>
          </CardFront>
          <CardBack>
            <p>Back of the Card</p>
            <button onClick={naver}> 버튼 </button>
          </CardBack>
        </CardInner>
      </CardContainer>
    </StSlackBox>
  );
};

export default Slack;

const StSlackBox = styled.div`
  @media screen and (min-width: 1000px) {
    margin-left: 50px;
  }
`;

const CardContainer = styled.div`
  width: 400px;
  height: 400px;
  margin-bottom: 50px;
  perspective: 1000px;
`;

const CardInner = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${(props) =>
    props.flipped === "true" ? "rotateY(180deg)" : "none"};
`;

const CardSide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);
`;

const CardFront = styled(CardSide)``;

const CardBack = styled(CardSide)`
  transform: rotateY(180deg);
`;
