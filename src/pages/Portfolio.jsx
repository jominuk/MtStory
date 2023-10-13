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
        <div className="txt1"> FRONT-END DEV.</div>
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
          안녕하세요. 저는 개발의 여정을 '실패의 아픔을 기쁨의 출발점' 으로 여기며 나아가고 있는 조민욱입니다. 
          협업 프로젝트를 통해 적극적인 의사소통, 문제와 해결책을 찾는 과정에서 크게 성장하고 있으며, 
          끊임없는 열정과 학습을 바탕으로 개발 트렌드에 부응하는 프로페셔널한 개발자로 거듭나기 위해 노력하고 있습니다.
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
    color: rgba(0, 0, 0, 0.8);
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
