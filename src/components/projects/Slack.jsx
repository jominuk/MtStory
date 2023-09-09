import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Slack = () => {
  const navigate = useNavigate();

  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <StEzipBox>
      <CardContainer onClick={handleCardFlip}>
        <CardInner flipped={isFlipped ? "true" : "false"}>
          <CardFront>
            <img
              src={require("../../images/slackMain.png")}
              alt="eziplogo"
              className="ezipMain"
            />
            <div className="beforeBox">
              <div className="before"> Unlock the Secret </div>
            </div>
          </CardFront>
          <CardBack>
            <div className="projectContainer">
              <div className="titleBox">
                <img
                  src={require("../../images/slackLogo.png")}
                  alt="ezipLogo"
                  className="logo"
                />
                <p>Slack(Clone-Project)</p>
              </div>

              <div className="pTe">
                <p>
                  ✌️Typescript 습득을 위한 기회가 클론 코딩을 통해 주어지게
                  되었습니다..
                </p>
              </div>

              <div className="smallTitle">Tech.</div>
              <div className="smallContents">
                JS, React, Typescript, SWR, Socket.io
              </div>

              <div className="detaBut">
                <button
                  onClick={() => {
                    navigate("/slackdetail");
                  }}
                >
                  Detail
                </button>
              </div>

              <div>
                <button
                  onClick={() => {
                    window.open(
                      "https://github.com/jominuk/Clone_Project-Slack"
                    );
                  }}
                  className="btnGrp"
                >
                  Source Code
                </button>
              </div>
            </div>
          </CardBack>
        </CardInner>
      </CardContainer>
    </StEzipBox>
  );
};

export default Slack;

const StEzipBox = styled.div`
  @media screen and (min-width: 1400px) {
    width: 100%;
  }

  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    width: 100%;
  }

  @media screen and (min-width: 600px) and (max-width: 999px) {
    width: 100%;
  }

  @media screen and (max-width: 599px) {
    width: 100%;
  }
`;

const CardContainer = styled.div`
  width: 300px;
  height: 300px;
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

const CardFront = styled(CardSide)`
  cursor: pointer;

  .ezipMain {
    width: 100%;
    height: 80%;
  }
  .beforeBox {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: rgba(0, 0, 0, 0.6);
    width: 300px;
    height: 300px;
    color: white;
    font-size: 18px;
    opacity: 0;
    overflow: hidden;
    transition: opacity 0.3s;

    .before {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 270px;
      height: 150px;

      border: 2px solid white;
      border-radius: 30px;
    }
  }
  &:hover .beforeBox {
    opacity: 1; /* When hovering over CardFront, set opacity to 1 */
  }
`;

const CardBack = styled(CardSide)`
  @import url("https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&display=swap");
  font-family: "Dongle", sans-serif;
  padding: 20px;
  width: 260px;
  height: 260px;

  transform: rotateY(180deg);
  .projectContainer {
    display: flex;
    flex-direction: column;
  }
  .titleBox {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 800;
  }
  .logo {
    width: 45px;
    height: 45px;
    margin-right: 20px;
  }
  .pTe {
    font-size: 13px;
  }

  .smallTitle {
    font-weight: 800;
  }
  .smallContents {
    font-size: 14px;
  }
  .detaBut {
    margin: 20px auto;
    width: 60%;
    button {
      width: 100%;
      height: 30px;
      font-size: 16px;
      border: none;
      border-radius: 20px;
      background: rgba(0, 161, 167, 0.3);
      cursor: pointer;
    }
  }
  .btnGrp {
    width: 40%;
    height: 20px;
    border: none;
    border-radius: 10px;
    background: rgba(0, 161, 167, 0.3);
    color: white;
    cursor: pointer;
  }
`;
