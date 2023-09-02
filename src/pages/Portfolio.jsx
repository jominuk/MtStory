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
      <StPortfolio>
        <div style={imageStyles}>
          <div className="name">
            <div>Intro</div>
          </div>
          <p className="content">
            안녕하세요. 개발자로서 여정을 "실패의 아픔을 배움의 기쁨"으로 품고
            나아가고 있는 조민욱 입니다.
            <br /> 협업 프로젝트를 통해 적극적인 의사소통을 추구하며
            <br />
            문제와 해결책을 찾는 과정에서 크게 성장하였습니다.
            <br />
            또한 개인 공부와 스터디를 통해 지속적으로 다양한 개발 역량과 스킬을
            쌓아왔습니다.
            <br />
            여전히 새로운 기술에 대한 도전과 두려움 없이 항상 성장하는 자세를
            가지고 있으며,
            <br />
            실질적인 도움이 되는 지식을 공부하고 확보하여
            <br />
            <label className="front">프론트엔드 개발자</label>로서 성장하고
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

const StPortfolio = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;

  .name {
    margin: 80px 0 80px 0;
    font-size: 54px;
    font-weight: 800;
    color: rgba(0, 0, 0, 0.6);
  }
  .content {
    line-height: 36px;
    font-weight: 600;
  }
  .front {
    font-size: 22px;
    font-weight: 600;
    color: blue;
  }
`;

const StLine = styled.div`
  margin: 150px 0;
  border-bottom: 3px dashed #1959c16e;
`;
