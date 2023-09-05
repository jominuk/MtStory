import styled from "styled-components";

const Css3 = ({ onCloseModal }) => {
  return (
    <ModalBackdrop>
      <StContainer>
        <h2>CSS3</h2>
        <p>
          position과 display를 적절히 사용해 반응형 웹과
          <br />
          다양한 애니메이션을 제어 활용할 수 있습니다.
        </p>
        <StCloseBut onClick={onCloseModal}>확인</StCloseBut>
      </StContainer>
    </ModalBackdrop>
  );
};

export default Css3;

const ModalBackdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.4);
`;

const StContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Sunflower:wght@300;500;700&display=swap");
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 450px;
  height: 200px;
  padding: 0 20px 50px 20px;
  font-family: "Sunflower", sans-serif;
  border: 1px solid powderblue;
  border-radius: 15px;
  transform: translate(-50%, -50%);
  background-color: white;
  animation: fadein 1s;
  z-index: 10;

  @keyframes fadein {
    0% {
      opacity: 0;
      top: 200px;
    }
    to {
      opacity: 1;
    }
  }

  p {
    font-size: 15px;
    line-height: 30px;
  }

  @media screen and (max-width: 599px) {
    width: 300px;
    height: 250px;
    border: 1px solid powderblue;
  }
`;

const StCloseBut = styled.button`
  position: absolute;
  bottom: 20px;
  width: 150px;
  height: 30px;
  border: none;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
`;
