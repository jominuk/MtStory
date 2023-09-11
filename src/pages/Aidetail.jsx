import { Aicss } from "../styles/Aicss";

const Aidetail = () => {
  return (
    <>
      <Aicss.StBackground>
        <div className="titleBox">
          <h1> Ai Chat </h1>
        </div>

        <div>
          <h2>🏡 프로젝트 요약 </h2>
          <p>개발 기간 : 23. 06.19 ~ 23. 06. 24</p>

          <span
            className="Link"
            onClick={() => {
              window.open("https://github.com/jominuk/Ai-Chat");
            }}
          >
            Github 바로가기
          </span>

          <span
            className="Link2"
            onClick={() => {
              window.open("https://ai-chat-gamma-weld.vercel.app/");
            }}
          >
            Ai Chat 바로가기
          </span>
        </div>

        {/* ===============================프로젝트 소개 ========================= */}

        <div>
          <h2 className="h3Title">📌 프로젝트 소개 </h2>
          <div className="ezipContent">
            프로젝트 제작 중 어려운 과제를 해결하기 위해 혁신적인 방향으로
            나아가는 데 도움을 주는 GPT 기반의 챗봇 서비스인{" "}
            <label className="pointColor">'Ai Chat Bot'</label>은 개발
            프로젝트를 진행하며 영감을 얻은 결과물입니다. 이 플랫폼은 친근하고
            가볍게 사용 가능하며, 모바일 환경에서도 간편한 채팅 솔루션을
            제공합니다.
          </div>
        </div>

        {/* ===============================프로젝트 스킬 ========================= */}

        <div>
          <h2 className="h3Title">🛠️ 프로젝트 스킬 </h2>
          <div>
            <img
              src="https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=JavaScript&logoColor=fff"
              alt="JS"
              className="LogoImage"
            />
            <img
              src="https://img.shields.io/badge/React-61DAFB?style=plastic&logo=React&logoColor=white"
              alt="React"
              className="LogoImage"
            />
            <img
              src="https://img.shields.io/badge/Context-API-764ABC?style=plastic&logo=Context-API&logoColor=white"
              alt="Context-API"
              className="LogoImage"
            />

            <img
              src="https://img.shields.io/badge/Styled-components-DB7093?style=plastic&logo=Styled-components&logoColor=white"
              alt="Styled-components"
              className="LogoImage"
            />
          </div>
        </div>

        {/* ===============================스킬 및 핵심 경험 ========================= */}

        <div>
          <h2 className="h3Title">🔥 스킬 및 핵심 경험</h2>

          <p>
            ■ <label className="pointColor">다크모드</label> 활용으로 사용자의
            경험을 개선시키며 CSS, JavaScript, 미디어 쿼리 등 스킬을 향상 👍
          </p>
          <p>
            ■ OpenAI API를 적극 활용하여 인공 지능과의 대화 기능을 통합한
            애플리케이션 개발 👍
          </p>
          <p>■ Chat-GPT와 유사한 채팅 환경 구축 👍</p>
          <p>
            ■ 전역 상태 관리에 대한 이해와{" "}
            <label className="pointColor">useContext</label> 활용 👍
          </p>
          <p>
            ■ <label className="pointColor">TypeScript</label>를 도입하여
            애플리케이션의 견고성과 성능 향상 👍
          </p>
        </div>

        {/* ===============================맡은 주요 업무  ========================= */}

        <div>
          <h2 className="h3Title">😎 맡은 주요 업무 </h2>

          <Aicss.StWork>
            <div className="titleLogoBox">
              <img
                src={require("../images/light.png")}
                alt="메인페이지"
                className="kakaoLogin"
              />

              <img
                src={require("../images/dark.png")}
                alt="메인페이지"
                className="kakaoLogin"
              />
            </div>
          </Aicss.StWork>
        </div>

        {/* ===============================트러블 슈팅 ========================= */}

        <div>
          <h2 className="h3Title">🪡 트러블 슈팅 </h2>

          <div className="troubleBox">
            <h3>🧐 채팅 UI 설계</h3>
            <div>1. 원인</div>
            <p className="trouble">
              a. 'chat-GPT와 유사한 채팅 환경을 어떻게 구현할 수 있을까?'라는
              과제에 직면
            </p>

            <div>2. 해결 과정</div>
            <p className="trouble">
              a. 'inputValue'를 'me'와 'ai'로 분류하여 대화를 구조화하기로 결정
            </p>

            <div>3. 해결</div>
            <p>
              a. 반환된 결과에서 'sender' 함수를 정의하고, 'styled-components'를
              활용하여 'justify-content' 속성을 설정합니다. 이를 통해 다음과
              같은 3항 연산을 활용하여 채팅 UI를 동적으로 생성
            </p>
            <p>
              <label className="pointColor1">
                {`justify-content: ${({ sender }) =>
                  sender === "me" ? "flex-end" : "flex-start"};`}
              </label>
            </p>
          </div>

          <div className="troubleBox">
            <h3>🧐 다크 모드 상태 관리 및 지속성</h3>
            <div>1. 원인</div>
            <p>
              a. 각 페이지에서 다크 모드를 적용하려면 props 절달로 인한 코드
              복잡성과 추적 어려움이 발생할 우려
            </p>
            <p className="trouble">
              b. 테마를 변경하고 페이지를 이동한 후에도 테마 상태가 유지되지
              않는 문제를 발견
            </p>

            <div>2. 해결 과정</div>
            <p>
              a. 상태 관리를 위해 'redux-toolkit' 및 'context API'와 같은
              라이브러리를 고려하였으며, 다음과 같은 고려 사항을 고려
            </p>
            <div className="contents1">
              <p>
                i. <label className="pointColor1">redux-toolkit</label>: 큰 상태
                트리와 복잡한 애플리케이션에 적합한 경우
              </p>
              <p>
                ii. <label className="pointColor1">context API</label>: 더
                간단하고 작은 규모의 애플리케이션 또는 구성 요소가 제한된 경우
              </p>
            </div>
            <p className="trouble">
              b. 테마 상태의 지속성을 관리하기 위해 'localStorage'를 활용할 수
              있었습니다. 이를 통해 간편하게 테마 설정을 유지
            </p>

            <div>3. 해결</div>
            <p>
              a. 현재 프로젝트의 규모와 복잡성을 고려하여 'context API'를
              사용하여 간소화된 전역 상태 관리를 선택
            </p>
            <p>b. 'localStorage'를 활용하여 테마 설정을 지속적으로 관리</p>
          </div>
        </div>
      </Aicss.StBackground>

      <div style={{ height: "100px" }} />
    </>
  );
};

export default Aidetail;
