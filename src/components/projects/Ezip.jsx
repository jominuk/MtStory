import React, { useState } from "react";
import styled from "styled-components";

const Ezip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const naver = () => {
    window.open("https://github.com/jominuk");
  };

  return (
    <StEzipBox>
      <CardContainer onClick={handleCardFlip}>
        <CardInner flipped={isFlipped ? "true" : "false"}>
          <CardFront>
            <p>Front of the Card</p>
          </CardFront>
          <CardBack>
            <p>Back of the Card Ezip먼저</p>
            <button onClick={naver}> 버튼 </button>
          </CardBack>
        </CardInner>
      </CardContainer>
    </StEzipBox>
  );
};

export default Ezip;

const StEzipBox = styled.div`
  @media screen and (min-width: 1400px) {
    width: 100%;
    margin-left: 40px;
  }

  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    width: 100%;
    margin-left: 20px;
  }

  @media screen and (min-width: 600px) and (max-width: 999px) {
    width: 100%;
  }

  @media screen and (max-width: 599px) {
    width: 100%;
  }
`;

const CardContainer = styled.div`
  @media screen and (min-width: 1400px) {
    width: 300px;
    height: 300px;
    margin-bottom: 50px;
    perspective: 1000px;
  }

  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    width: 300px;
    height: 300px;
    margin-bottom: 50px;
    perspective: 1000px;
  }

  @media screen and (min-width: 600px) and (max-width: 999px) {
    width: 300px;
    height: 300px;
    margin-bottom: 50px;
    perspective: 1000px;
  }

  @media screen and (max-width: 599px) {
    width: 300px;
    height: 300px;
    margin-bottom: 50px;
    perspective: 1000px;
  }
`;

const CardInner = styled.div`
  @media screen and (min-width: 1400px) {
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    transform: ${(props) =>
      props.flipped === "true" ? "rotateY(180deg)" : "none"};
  }

  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    transform: ${(props) =>
      props.flipped === "true" ? "rotateY(180deg)" : "none"};
  }

  @media screen and (min-width: 600px) and (max-width: 999px) {
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    transform: ${(props) =>
      props.flipped === "true" ? "rotateY(180deg)" : "none"};
  }

  @media screen and (max-width: 599px) {
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    transform: ${(props) =>
      props.flipped === "true" ? "rotateY(180deg)" : "none"};
  }
`;

const CardSide = styled.div`
  @media screen and (min-width: 1400px) {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);
  }

  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);
  }

  @media screen and (min-width: 600px) and (max-width: 999px) {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 599px) {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);
  }
`;

const CardFront = styled(CardSide)`
  @media screen and (min-width: 1400px) {
  }

  @media screen and (min-width: 1000px) and (max-width: 1399px) {
  }

  @media screen and (min-width: 600px) and (max-width: 999px) {
  }

  @media screen and (max-width: 599px) {
  }
`;

const CardBack = styled(CardSide)`
  @media screen and (min-width: 1400px) {
    transform: rotateY(180deg);
  }

  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    transform: rotateY(180deg);
  }

  @media screen and (min-width: 600px) and (max-width: 999px) {
    transform: rotateY(180deg);
  }

  @media screen and (max-width: 599px) {
    transform: rotateY(180deg);
  }
`;
