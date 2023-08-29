import styled from "styled-components";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const Portfolio = () => {
  return (
    <>
      <StPortfolio>
        <div className="name">
          <div>Frontend 개발자</div>
          <div>조민욱</div>
        </div>
        <p className="content">
          안녕하세요 실패의 아픔을 배움의 기쁨으로 개발자의 어깨를 나란히 걷고
          있는 조민욱 입니다.
          <br />그 동안의 교육에서 총 3개의 협업 프로젝트를 참여했습니다.
          <br />
          협업을 통해 적극적인 의사소통과 문제를 찾고 해결에 많은 성장을
          하였으며,
          <br />
          다양한 개발 역량과 스킬을 꾸준히 쌓아왔습니다.
          <br />
          여전히 새로운 기술 습득에 대해 두려워 하지 않고 도전적인 모습이며
          <br />
          끊임 없이 공부하고 성실하게 쌓은 지식으로 실질적인 도움이 되는
          <br />
          <label className="front">프론트엔드 개발자</label>로 성장하고
          있습니다.
        </p>

        <StBackground id="about">
          <About />
        </StBackground>

        <div id="skills" />
        <Skills />

        <StBackground id="projects">
          <Projects />
        </StBackground>

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
    margin: 180px 0 60px 0;
    font-size: 48px;
    font-weight: 1000;
    color: rgba(0, 0, 0, 0.7);
    line-height: 80px;
  }
  .content {
    line-height: 32px;
    font-weight: 600;
  }
  .front {
    font-size: 22px;
    font-weight: 600;
    color: blue;
  }
`;

const StBackground = styled.div`
  background: rgb(245 245 245);
  margin-top: 200px;
  padding: 120px 0;
`;