import { Ueatcss } from "../styles/Ueatcss";
import ReactPlayer from "react-player";

const Ueatdetail = () => {
  return (
    <>
      <Ueatcss.StBackground>
        <div className="titleBox">
          <img
            src={require("../images/ueatLogo.png")}
            alt="로고"
            className="imgBox"
          />
          <h1> UEAT : 유 잇(mini-project) </h1>
        </div>

        <div>
          <h2>🏡 프로젝트 요약 </h2>
          <p>개발 기간 : 22. 12.17 ~ 22. 12. 23</p>

          <span
            className="Link"
            onClick={() => {
              window.open("https://github.com/jominuk/Mini_Project-Ueat");
            }}
          >
            Github 바로가기
          </span>
          <Ueatcss.StVideoBox>
            <ReactPlayer
              url="video/ueatlodin.mp4"
              width="400px"
              height="280px"
              className="video"
              muted={true}
              playing={true}
              loop={true}
            />
          </Ueatcss.StVideoBox>

          <div className="Link2">
            * 현재 서버가 종료되어 영상으로 보여드립니다.
          </div>
        </div>

        {/* ===============================프로젝트 소개 ========================= */}

        <div>
          <h2 className="h3Title">📌 프로젝트 소개 </h2>
          <div className="ezipContent">
            <label className="pointColor">"UEAT(유잇)"</label> 프로젝트는 항상
            다수의 사람들과 함께 식사를 즐기거나, 혼자라도 특별한 맛을 느끼고자
            할 때 발생하는 결정 과정의 어려움을 해결하기 위해 탄생한 플랫폼
            입니다. 이러한 상황에서 자주 발생하는 결정 오류를 최소화하고자
            만들게 되었습니다.{" "}
            <label className="pointColor">"UEAT(유잇)"</label>은 사용자들이 먹고
            싶은 음식을 쉽게 찾을 수 있도록 다양한 종류의 음식을 확인 할 수
            있으며, 다른 사용자들의 음식 경험과 내가 먹은 음식 경험을 추천하여
            공유하며 더 나은 식사 결정을 돕는 플랫폼으로, 맛있는 음식을 찾고
            공유하는 즐거움을 제공하기 위해 제작했습니다.
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
              src="https://img.shields.io/badge/Redux-toolkit-764ABC?style=plastic&logo=Redux-toolkit&logoColor=white"
              alt="Resux-Toolkit"
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
            ■ <label className="pointColor">Redux-toolkit</label>을 사용한
            프로젝트 개발👍
          </p>
          <p className="contents1">
            ◻ Redux Toolkit을 이용하여 전역 상태 관리를 구축하고, 클론
            프로젝트를 개발함
            <br />◻ Redux Toolkit을 활용하면 Redux를 손쉽게 도입할 수 있으며,
            보일러플레이트 작성 등의 번거로운 과정을 간소화함
          </p>

          <p>
            ■ <label className="pointColor">협업</label>의 중요성 및 경험👍
          </p>

          <p className="contents1">
            ◻ 소통을 통해 다양한 자원과 지식을 공유하며 혁신적이고 창의적인
            아이디어를 발전시키는 데 중요한 역할을 함
            <br />◻ 개인적인 작업보다 공동 작업을 통해 더 많은 정보와 지식을
            얻을 수 있었습니다.
            <br />◻ 다양한 문제를 해결하는 과정에서 협업은 해결책을 찾는 데 큰
            도움을 줌
          </p>
        </div>

        {/* ===============================맡은 주요 업무  ========================= */}

        <div>
          <h2 className="h3Title">😎 맡은 주요 업무 </h2>

          <Ueatcss.StWork>
            <div className="titleLogoBox">
              <img
                src={require("../images/mainUeat.png")}
                alt="메인페이지"
                className="kakaoLogin"
              />
            </div>
            <div className="loginContent">
              <h3>◎ 주요 페이지 디자인</h3>
              <p>
                ♣ 메인 페이지를 통한 CSS 의 구성요소 배치와 다양한 position활용
                display활용 속성 등 숙지가 되었던 시간이었습니다.
              </p>
            </div>
          </Ueatcss.StWork>

          <Ueatcss.StWork>
            <div className="titleLogoBox">
              <img
                src={require("../images/ueatpost.png")}
                alt="게시물페이지"
                className="community"
              />
            </div>
            <div className="loginContent">
              <h3>◎ 게시물 작성 페이지 </h3>
              <p>
                ♣ 게시물 작성 페이지에서 백엔드 서버와의 첫 번째 API 연동은
                특별한 순간으로, RESTful한 API의 중요성을 깨달았습니다.
              </p>
              <p>
                ♣ Formdata를 활용하여 데이터를 서버에 전송하고, Select 요소를
                포함한 데이터를 백엔드와 협의하며 전달하는 방법을 익히는
                과정에서 더 깊이 있는 이해를 얻었습니다.
              </p>
            </div>
          </Ueatcss.StWork>
        </div>

        {/* ===============================트러블 슈팅 ========================= */}

        <div>
          <h2 className="h3Title">🪡 트러블 슈팅 </h2>

          <div className="troubleBox">
            <h3>🧐 formData 활용: 이미지와 카테고리 데이터 전송</h3>
            <div>1. 원인</div>
            <p className="trouble">
              a. 제출 양식에서 이미지와 카테고리 데이터를 함께 서버로 전송해야
              하는 요구사항
            </p>

            <div>2. 해결 과정</div>
            <p>
              a. <label className="pointColor1">Base64 인코딩</label>: 이미지나
              파일과 같은 바이너리 데이터를 텍스트로 변환하는 기술
            </p>
            <p className="trouble">
              b. <label className="pointColor1">formData 객체</label>: 키-값
              쌍의 집합으로 HTTP 요청의 일부로 양식 데이터를 쉽게 구성하고
              서버에 전송할 수 있는 JavaScript 객체
            </p>

            <div>3. 해결</div>
            <p>
              a. 이미지와 같은 바이너리 데이터는{" "}
              <label className="pointColor1">Base64</label>로 변환하여 전송하기
              어려운 경우, <label className="pointColor1">formData</label>를
              활용하여 쉽게 처리
            </p>
          </div>
        </div>
      </Ueatcss.StBackground>

      <div style={{ height: "100px" }} />
    </>
  );
};

export default Ueatdetail;
