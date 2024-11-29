import styled from "styled-components";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Scrolls from "../hooks/Scrolls";

const Portfolio = () => {
  const scrollPosition = 200;
  const imageStyles = Scrolls(scrollPosition);

  return (
    <>
      <StImgbox>
        <div className="txt1"> Full_Stack DEV.</div>
        <div className="txt2"> fortfolio </div>
        <img
          src={require("../images/down.png")}
          alt="화살표"
          className="down"
        />
      </StImgbox>

      <StPortfolio>
        <div style={imageStyles}>
          <div className="name">
            <div>Intro</div>
          </div>
          <p className="content">
            안녕하세요. 항상 개발 과정에서 실패를 겪을 때마다 새로운 시작점을
            얻고 기쁨을 느끼고 있는 <span>조민욱</span>입니다. 이전 사업에서
            홈페이지를 제작하려는 생각에 문득 검색해 본 개발에 대한 호기심이
            지금까지 저를 개발자로 이끌게 되었습니다. 그동안 부트캠프 및 국가
            교육 과정을 통해 웹 기획, 개발, 배포에 걸쳐 폭넓은 경험을
            쌓았습니다. 비록 늦은 시작이였지만 그 이상만큼의 열정과 호기심을
            가지고 개발에 몰두하고 있으며 알고리즘으로 문제 접근 방법과 해결책을
            찾고 개인 프로젝트, 팀 프로젝트를 참여하면서 최신기술을 익히고
            있습니다. 또한 스터디 그룹을 통해 학습하는 과정에서 크게 성장하고
            있습니다.
          </p>
        </div>

        <StLine id="about" />
        <About />

        <StLine id="skills" />
        <Skills />

        <StLine id="projects" />
        <Projects />

        <div style={{ height: "100px" }} />
      </StPortfolio>
    </>
  );
};

export default Portfolio;

const StImgbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FIL8dX%2FbtssSosDy0K%2FgZ5E3CAsVyulKPxjhkCFuK%2Fimg.jpg")
    no-repeat top center;
  background-size: cover;
  background-attachment: fixed;

  .txt1 {
    position: relative;
    text-align: center;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.8);

    animation: movehight 0.4s ease-in 1;
    @keyframes movehight {
      0% {
        top: -150px;
        opacity: 0;
      }
      30% {
        top: -100px;
        opacity: 0.3;
      }
      60% {
        top: -50px;
        opacity: 0.6;
      }
      100% {
        top: 0;
        opacity: 1;
      }
    }
  }

  .txt2 {
    line-height: 180px;
    font-weight: 600;
    color: #34495e;
    animation: moveh 2.5s ease-in-out 1;

    @keyframes moveh {
      from {
        letter-spacing: 3vw;
        opacity: 0;
      }
      to {
        letter-spacing: normal;
        opacity: 1;
      }
    }
  }

  .down {
    position: absolute;
    width: 30px;
    height: 30px;
    bottom: 200px;
    margin-top: 100px;
  }

  //  =========================== StImgbox media 요소 ==================================

  @media screen and (min-width: 1400px) {
    height: 80vh;

    .txt1 {
      font-size: 100px;
      margin-top: 250px;
    }

    .txt2 {
      font-size: 50px;
    }

    .down {
      animation: scrolldown 1300ms linear infinite;
    }

    @keyframes scrolldown {
      0% {
        bottom: 220px;
        opacity: 1;
      }
      50% {
        bottom: 200px;
        opacity: 0.5;
      }
      100% {
        bottom: 180px;
        opacity: 0;
      }
    }
  }

  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    height: 80vh;

    .txt1 {
      font-size: 80px;
      margin-top: 250px;
    }

    .txt2 {
      position: relative;
      text-align: center;
      font-size: 35px;
    }

    .down {
      animation: scrolldown 1300ms linear infinite;
    }

    @keyframes scrolldown {
      0% {
        bottom: 220px;
        opacity: 1;
      }
      50% {
        bottom: 200px;
        opacity: 0.5;
      }
      100% {
        bottom: 180px;
        opacity: 0;
      }
    }
  }

  @media screen and (min-width: 600px) and (max-width: 999px) {
    height: 100vh;

    .txt1 {
      font-size: 60px;
      margin-top: 150px;
    }

    .txt2 {
      position: relative;
      text-align: center;
      font-size: 30px;
    }

    .down {
      animation: scrolldown 1300ms linear infinite;
    }

    @keyframes scrolldown {
      0% {
        bottom: 40px;
        opacity: 1;
      }
      50% {
        bottom: 20px;
        opacity: 0.5;
      }
      100% {
        bottom: 0px;
        opacity: 0;
      }
    }
  }

  @media screen and (max-width: 599px) {
    height: 100vh;

    .txt1 {
      font-size: 40px;
      margin-top: 10px;
    }

    .txt2 {
      position: relative;
      text-align: center;
      font-size: 20px;
    }

    .down {
      animation: scrolldown 1300ms linear infinite;
    }

    @keyframes scrolldown {
      0% {
        bottom: 40px;
        opacity: 1;
      }
      50% {
        bottom: 20px;
        opacity: 0.5;
      }
      100% {
        bottom: 0px;
        opacity: 0;
      }
    }
  }
`;

const StPortfolio = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;

  .name {
    margin: 80px 0 80px 0;
    font-size: 54px;
    font-weight: 800;
    color: rgba(0, 0, 0, 0.6);
  }
  .content {
    width: 55%;
    margin: 0 auto;
    line-height: 40px;
    font-weight: 600;
    span {
      color: blue;
      font-size: 20px;
      font-weight: 1000;
    }
  }
  .front {
    font-size: 22px;
    font-weight: 600;
    color: blue;
  }

  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    .content {
      width: 80%;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 999px) {
    .content {
      width: 100%;
    }
  }

  @media screen and (max-width: 599px) {
    .content {
      width: 100%;
    }
  }
`;

const StLine = styled.div`
  margin: 150px 0;
  border-bottom: 3px dashed #1959c16e;
`;
