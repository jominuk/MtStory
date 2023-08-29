import styled from "styled-components";

const Projects = () => {
  return (
    <>
      <StTitle>projects</StTitle>
      <StProjectBox>
        <div className="imgBox">
          <img src={require("../images/ezip.jpg")} className="img" />
        </div>

        <div className="contents">
          <div className="logoTitle">
            <img src={require("../images/eziplogo.jpg")} className="logo" />
            <div> ezip : 이집은</div>
          </div>
          <p>☝️실제 거주 해 본 사람들이 작성하는 찐 리뷰 플렛폼</p>
          <p>
            ✌️집주인도, 중개사도 모르는 진짜 후기를 알려주는
            <br />
            플렛폼
          </p>
        </div>
      </StProjectBox>

      <StProjectBox>
        <div>이미지</div>
        <div>내용</div>
      </StProjectBox>
    </>
  );
};

export default Projects;

const StTitle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Phudu:wght@600;800&display=swap");
  font-family: "Phudu", cursive;
  font-size: 54px;
  font-weight: 800;
  margin-bottom: 50px;
  color: rgb(68, 70, 73);
`;

const StProjectBox = styled.div`
  display: flex;
  width: 50%;
  height: 300px;
  margin: 50px auto 50px auto;
  border: 2px solid rgb(6 154 94);
  border-radius: 30px;

  .imgBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 100%;

    .img {
      width: 95%;
      height: 85%;
      border-radius: 20px;
    }
  }

  .contents {
    width: 50%;
    height: 65%;
    margin: auto;

    .logoTitle {
      display: flex;
      justify-content: left;
      align-items: center;

      div {
        font-weight: 600;
      }

      .logo {
        width: 50px;
        height: 50px;
        margin-right: 30px;
      }
    }

    p {
      text-align: left;
      font-size: 14px;
    }
  }
`;
