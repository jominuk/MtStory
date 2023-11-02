import { Slackcss } from "../styles/Slackcss";

const Slackdetail = () => {
  return (
    <>
      <Slackcss.StBackground>
        <div className="titleBox">
          <img
            src={require("../images/slackLogo.png")}
            alt="로고"
            className="imgBox"
          />
          <h1> Slack </h1>
        </div>

        <div>
          <h2>🏡 프로젝트 요약 </h2>
          <p>개발 기간 : 23. 04. 24 ~ 23. 05. 12</p>

          <span
            className="Link"
            onClick={() => {
              window.open("https://github.com/jominuk/Clone_Project-Slack");
            }}
          >
            Github 바로가기
          </span>
        </div>

        {/* ===============================프로젝트 소개 ========================= */}

        <div>
          <h2 className="h3Title">📌 프로젝트 기획 의도 및 소개 </h2>
          <div className="ezipContent">
            클론 프로젝트를 통해{" "}
            <label className="pointColor">TypeScript</label>를 적용하면서
            기술적으로 한 단계 더 발전할 수 있는 기회를 얻었습니다. 이러한
            경험을 통해 코드의 오류를 초기 단계부터 방지하고 유지보수 가능한
            코드를 작성하는 데 큰 이점을 봤습니다. 그러나{" "}
            <label className="pointColor">TypeScript</label>를 사용하면서 작업
            시간이 더 많이 소요된다는 점을 인지하게 되었습니다. 각각의 타입을
            명시해야 하므로 코드가 길어지면서 가독성이 일부 감소하는 경향을
            느꼈습니다. 이러한 과정을 통해{" "}
            <label className="pointColor">TypeScript</label>를 활용하는 방법을
            더 깊이 이해하고, 타입 시스템을 더욱 효과적으로 활용하는 방법을
            배웠습니다.
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
              src="https://img.shields.io/badge/TypeScript-3178C6?style=plastic&logo=TypeScript&logoColor=white"
              alt="TypeScript"
              className="LogoImage"
            />
            <img
              src="https://img.shields.io/badge/SWR-FFFFFF?style=plastic&logo=SWR&logoColor=white"
              alt="SWR"
              className="LogoImage"
            />
            <img
              src="https://img.shields.io/badge/Socket.io-010101?style=plastic&logo=Socket.io&logoColor=white"
              alt="Socket.io"
              className="LogoImage"
            />
          </div>
        </div>

        {/* ===============================스킬 및 핵심 경험 ========================= */}

        <div>
          <h2 className="h3Title">🔥 스킬 및 핵심 경험</h2>

          <p>
            ■ <label className="pointColor">TypeScript</label>를 활용한 클론
            프로젝트 개발 👍
          </p>
          <p className="contents1">
            ◻ 코드 작성 중 발생할 수 있는 오류를 사전에 방지하여 개발 생산성
            향상
            <br />◻ 협업 시 코드 수정을 보다 쉽게 할 수 있도록 진입 장벽을
            낮춰줌
            <br />◻ 정적 타입 체크를 통해 코드 작성 중 발생할 수 있는 오류 예방
          </p>

          <p>
            ■ <label className="pointColor">SWR</label>을 활용한 클론 프로젝트
            개발 👍
          </p>
          <p className="contents1">
            ◻ SWR은 React Query와 유사하며, 간편하고 직관적인 API로 데이터를
            가져와 캐싱하고 업데이트를 감지하는 작업이 용이
            <br />◻ 데이터 요청 시간을 최소화하고 캐시를 활용해 데이터를 빠르게
            로드하여 페이지 로딩 시간 단축
          </p>

          <p>
            ■ <label className="pointColor">Socket.io</label>를 이용한 실시간
            채팅 기능 개발 👍
          </p>
          <p className="contents1">
            ◻ 클라이언트와 서버 간 양방향 실시간 통신으로 실시간 대화 경험 제공
            <br />◻ 간편하고 사용하기 쉬운 API로 실시간 통신 설정 가능
          </p>
        </div>

        {/* ===============================맡은 주요 업무  ========================= */}

        <div>
          <h2 className="h3Title">😎 맡은 주요 업무 </h2>

          <Slackcss.StWork>
            <div className="titleLogoBox">
              <img
                src={require("../images/slackChat.png")}
                alt="메인페이지"
                className="kakaoLogin"
              />

              <img
                src={require("../images/slackJoin.png")}
                alt="메인페이지"
                className="kakaoLogin"
              />
            </div>
          </Slackcss.StWork>
        </div>

        {/* ===============================트러블 슈팅 ========================= */}

        <div>
          <h2 className="h3Title">🪡 트러블 슈팅 </h2>

          <div className="troubleBox">
            <h3>🧐 Optimistic UI (낙관적 UI)</h3>
            <div>1. 원인</div>
            <p>
              a. 첫 번째 로그인 이후에도 동일한 API 요청이 반복적으로 발생하는
              문제가 발생
            </p>
            <p className="trouble">
              b. Socket.io를 사용하여 채팅을 구현한 후, 사용자가 채팅을 입력한
              후에도 응답을 받는 데 시간이 걸려 채팅이 딜레이되는 문제가
              사용성을 저해
            </p>

            <div>2. 해결 과정</div>
            <p>
              a. <label className="pointColor1">revalidate</label>: SWR을
              사용하여 서버에 요청을 보내 데이터를 다시 가져오는 방법
            </p>
            <p className="trouble">
              b. <label className="pointColor1">mutate</label>: 서버에 요청을
              보내지 않고 SWR 캐시 데이터를 직접 수정하는 방법
            </p>

            <div>3. 해결</div>
            <p>
              a. <label className="pointColor1">revalidate</label>의 활용: 이는
              사용자 작업, 예를 들어 특정 버튼 클릭 또는 양식 제출과 같은 작업에
              대한 응답을 처리할 때 사용
            </p>
            <p>
              b. <label className="pointColor1">mutate</label>의 활용: 이는
              Socket을 사용하여 특정 사용자의 정보를 빠르게 업데이트하고 캐시된
              데이터로 즉시 반영할 때 사용
            </p>
          </div>

          {/* <div className="troubleBox">
            <h3>🧐 useSWRInfinite의 2차원 배열</h3>
            <div>1. 원인</div>
            <p>
              a. 스크롤이 상단에 위치할 때 추가 데이터를 불러오는 동안 발생하는
              오류로, 현재 보이는 데이터에서 에러가 표시
            </p>
            <p className="trouble">
              b. 테마를 변경하고 페이지를 이동한 후에도 테마 상태가 유지되지
              않는 문제를 발견
            </p>

            <div>2. 해결 과정</div>
            <p className="trouble">
              a. 기존 <label className="pointColor1">useSWR</label>을 사용하면
              데이터가 1차원 배열 형태로 반환되어{" "}
              <label className="pointColor1">
                [&#123;id:1&#125;, &#123;id:2&#125;, &#123;id:3&#125;]
              </label>
              와 같은 구조를 가지게 됩니다. 그러나{" "}
              <label className="pointColor1">useSWRInfinite</label>를 사용하면
              데이터가 2차원 배열로 변경되어 문제가 발생
            </p>

            <div>3. 해결</div>
            <p>
              a. 1차원 배열에서 페이지별로 데이터를 받아올 수 있도록 로직을
              수정하여 2차원 배열 형태로 데이터를 받아오게 했습니다. 즉,
              <label className="pointColor1">
                [&#123;id:1&#125;, &#123;id:2&#125;, &#123;id:3&#125;]
              </label>
              와 같은 상태로 데이터를 수정했습니다.
              <br />
              <br />
              b. 중첩 배열을 평탄화하기 위해 Spread 연산자인 '...data' 대신
              <label className="pointColor1">data.flat()</label>을 사용하여
              데이터를 수정했습니다."
            </p>
          </div> */}

          <div className="troubleBox">
            <h3>🧐 소켓(Socket) 이슈 해결</h3>
            <div>1. 원인</div>
            <p>
              a. 동일한 방에서 채팅 후 다른 방에서도 내가 작성한 채팅이 표시되는
              문제가 발생했습니다.
            </p>
            <p className="trouble">
              b. 올바른 채팅 메시지를 입력하고 있지만 서버로 데이터를 전송하지
              못하는 문제가 있었습니다.
            </p>

            <div>2. 해결 과정</div>
            <p>
              a. 방을 떠날 때 기존 방에 남아있던 데이터를 처리하기 위한 로직을
              구현하여 문제를 해결했습니다.
            </p>
            <p className="trouble">
              b. 소켓.io 연결 중에 'sendBuffer'와 'receiveBuffer' 내부 배열이
              비어있어야 데이터를 전송할 수 있어서 이를 수정했습니다.
            </p>

            <div>3. 해결</div>
            <p>
              a. 소켓을 사용한 함수에 객체를 만들고 'delete'를 사용하여 데이터를
              정리하고, 그 후 'disconnect()'를 사용하여 기존 연결을 끊음으로써
              문제를 해결했습니다.
            </p>
            <p>
              b. 백엔드 서버와 프론트엔드 서버 간의 소켓.io 버전을 동일하게
              맞춤으로써 문제를 해결했습니다.
            </p>
          </div>
        </div>
      </Slackcss.StBackground>

      <div style={{ height: "100px" }} />
    </>
  );
};

export default Slackdetail;
