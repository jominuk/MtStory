import React from "react";
import styled from "styled-components";

const Javascript = ({ onCloseModal }) => {
  return (
    <ModalBackdrop>
      <StContainer>
        <StCloseBut onClick={onCloseModal}>X</StCloseBut>
        <p>모달창입니다.</p>
      </StContainer>
    </ModalBackdrop>
  );
};

export default Javascript;

const ModalBackdrop = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const StContainer = styled.div`
  width: 500px;
  height: 400px;
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  animation: fadein 1s;

  @keyframes fadein {
    0% {
      opacity: 0;
      top: 200px;
    }
    to {
      opacity: 1;
    }
  }
`;

const StCloseBut = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
`;
