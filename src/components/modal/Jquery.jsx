import styled from "styled-components";

const Jquery = ({ onCloseModal }) => {
  return (
    <ModalBackdrop>
      <StContainer>
        <h2>JQuery</h2>
        <p>
        jQuery는 JavaScript 라이브러리로, 웹 개발에서 다양한 기능을 쉽게 구현할 수 있게 도와줍니다. 
        HTML 문서 요소를 찾고 조작하며, 이벤트 처리, 애니메이션 효과, AJAX 요청 등을 간편하게 처리할 수 있습니다.
        </p>
        <StCloseBut onClick={onCloseModal}>확인</StCloseBut>
      </StContainer>
    </ModalBackdrop>
  );
};

export default Jquery;

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
  width: 460px;
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
