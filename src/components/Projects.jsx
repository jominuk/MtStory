import styled from "styled-components";
import Ezip from "./projects/Ezip";
import Slack from "./projects/Slack";

const Projects = () => {
  return (
    <>
      <StTitle>projects</StTitle>

      <StProject>
        <div className="ProjectBox">
          <Ezip />

          <Slack />
        </div>

        {/* 
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
        </StProjectBox> */}
      </StProject>
    </>
  );
};

export default Projects;

const StTitle = styled.div`
  font-size: 54px;
  font-weight: 800;
  margin-bottom: 80px;
  color: rgba(0, 0, 0, 0.6);
`;

const StProject = styled.div`
  @media screen and (min-width: 1400px) {
    width: 60%;
    margin: 0 auto;

    .ProjectBox {
      display: flex;
    }
  }

  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    width: 60%;
    margin: 0 auto;

    .ProjectBox {
      display: flex;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 999px) {
    display: flex;
    flex-direction: column;

    .ProjectBox {
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 599px) {
    display: flex;
    flex-direction: column;

    .ProjectBox {
      margin: 0 auto;
    }
  }
`;

// const StProjectBox = styled.div`
//   display: flex;
//   width: 50%;
//   height: 300px;
//   margin: 50px auto 50px auto;
//   border: 2px solid rgb(6 154 94);
//   border-radius: 30px;

//   .imgBox {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 45%;
//     height: 100%;

//     .img {
//       width: 95%;
//       height: 85%;
//       border-radius: 20px;
//     }
//   }

//   .contents {
//     width: 50%;
//     height: 65%;
//     margin: auto;

//     .logoTitle {
//       display: flex;
//       justify-content: left;
//       align-items: center;

//       div {
//         font-weight: 600;
//       }

//       .logo {
//         width: 50px;
//         height: 50px;
//         margin-right: 30px;
//       }
//     }

//     p {
//       text-align: left;
//       font-size: 14px;
//     }
//   }
// `;
