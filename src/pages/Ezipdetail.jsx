import { Ezipcss } from "../styles/Ezipcss";
import ReactPlayer from "react-player";

const Ezipdetail = () => {
  return (
    <>
      <Ezipcss.StBackground>
        <div className="titleBox">
          <img
            src={require("../images/eziplogo.jpg")}
            alt="로고"
            className="imgBox"
          />
          <h1> ezip : 이집은 </h1>
        </div>

        <div>
          <h2>🏡 프로젝트 요약 </h2>
          <p>개발 기간 : 22. 12. 24 ~ 23. 02. 10</p>

          <div>
            <span
              className="Link"
              onClick={() => {
                window.open("https://github.com/jominuk/Final_Project-ezip");
              }}
            >
              Github 바로가기
            </span>

            <span
              className="Link2"
              onClick={() => {
                window.open("https://www.ezip.store/");
              }}
            >
              ezip 바로가기
            </span>
          </div>
        </div>

        {/* ===============================프로젝트 소개 ========================= */}

        <div>
          <h2 className="h3Title">📌 프로젝트 소개 </h2>
          <div className="ezipContent">
            "이집은(ezip)" 프로젝트는 내가 직접 글도 올릴 수 있으며 솔직 담백한
            이야기와 사소한 후기 를 공유할 수 있게 만든 플렛폼 입니다. 회의
            당시의 부동산 관련 뉴스가 많이 나왔었습니다. 또한, 저희 팀원들 상당
            수가 혼자 살면서 부동산을 돌아다니면서 방문을 햇지만, 만족하는 집도
            안나와서 헛걸음 했던 경우가 상당수고 막상 다른 플렛폼의 이미지를
            보면서 만족해서 갔지만 보여진 이미지랑 너무 다른 방과 구조가 있어
            실망했던 경험도 나누었습니다. 저 역시 이런 경험을 해봤기에 다들
            솔직한 후기를 가지면서 나눌 수 있는 플렛폼을 개발하고자 했습니다.
            또한 직접 부동산에 알려서 매물을 내놓는게 아닌 내가 직접 매물을
            내놓고 후기 작성을 한 후에 부동산과의 계약을 하는게 편하다 생각이
            들었습니다.
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
              src="https://img.shields.io/badge/React-Query-FF4154?style=plastic&logo=React-Query&logoColor=white"
              alt="React-Query"
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

          <p>■ Redux-toolkit을 사용한 미니, 클론 프로젝트 개발👍</p>
          <p className="contents1">
            ◻ 전역 상태 관리 라이브러리로써 Redux를 사용할 환경을 구축하는
            보일러플레이트(상용구) 작성 등의 과정이 생략이 가능하기에 사용
          </p>

          <p>■ React-Query 를 이용한 프로젝트 개발 👍</p>

          <p className="contents1">
            ◻ 서버 사이드의 상태를 보다 용이하게 관리하기 위해 사용
            <br />◻ 캐싱 된 데이터를 사용해 데이터 업데이트를 빠르게 보여줄 수
            있으며 서버에 부담도 줄일 수 있다는 장점
          </p>

          <p>■ React-Query의 장점 infiniteQuery 사용 👍</p>

          <p className="contents1">
            ◻ 일정한 데이터를 순차적으로 보여주기 위함
            <br />◻ 데이터의 일부만 먼저 렌더링하고 차례로 보여줌으로써 최적화와
            유저의 로딩 시간을 개선
          </p>

          <p>■ 고객 피드백을 반영한 UX 개선 👍</p>

          <p className="contents1">
            ◻ Private Routes를 활용해 로그인이 필요한 페이지에서 강제진입 또는
            뒤로가는 현상에서 특정 액션을 취할 수 있게 해결
            <br />◻ useLocation을 활용해 하단스크롤 화면에서 페이지 이동 시 상단
            스크롤로 이동 해결
          </p>
        </div>

        {/* ===============================맡은 주요 업무  ========================= */}

        <div>
          <h2 className="h3Title">😎 맡은 주요 업무 </h2>

          <Ezipcss.StWork>
            <div className="titleLogoBox">
              <div className="kakaoLogin" />
            </div>
            <div className="loginContent">
              <h3>◎ 로그인 페이지</h3>
              <p>
                ♣ 사용자는 기존 카카오 계정으로 로그인 할 수 있어 등록 과정에서
                시간을 절약하고 번거로움을 줄일 수 있습니다.
              </p>
              <p>
                ♣ 카카오와 연동된 다른 앱과 웹사이트에 원활하게 접속할 수
                있습니다.
              </p>
              <p>♣ 개인정보의 기억함에 있어 피로도를 줄일 수 있습니다.</p>
            </div>
          </Ezipcss.StWork>

          <Ezipcss.StWork>
            <Ezipcss.VideoBox>
              <ReactPlayer
                url="video/mypage.mp4"
                className="Video"
                muted={true}
                playing={true}
                loop={true}
             />
            </Ezipcss.VideoBox>

            <div className="loginContent">
              <h3>◎ 마이페이지 </h3>
              <p>
                ♣ 사용자에게 개인 정보, 활동 및 콘텐츠에 접근하여 관리 할 수
                있는 page를 제공합니다.
              </p>
              <p>♣ 등록된 게시물, 리뷰, 댓글의 콘텐츠를 관리할 수 있습니다.</p>
            </div>
          </Ezipcss.StWork>

          <Ezipcss.StWork>
          <Ezipcss.VideoBox>
            <ReactPlayer
              url="video/review.mp4"
              className="Video"
              muted={true} //chrome정책으로 인해 자동 재생을 위해 mute 옵션을 true로 해주었다.
              playing={true}
              loop={true}
            />
            </Ezipcss.VideoBox>
            <div className="loginContent">
              <h3>◎ 리뷰 페이지 </h3>
              <p>
                ♣ 그 동안 살고 있던 집에 대해 솔직한 후기를 등록하여 보다 다음
                입주자에게 현실적이고 솔직한 내용을 전달할 수 있다.
              </p>
              <p>
                ♣ 상태, 편의 시설, 위치, 전반적인 생활 경험을 포함하여 부동산의
                다양한 측면을 이야기 할 수 있습니다.
              </p>
              <p>
                ♣ 별점을 통해서 거주하고 있는 부동산을 한눈에 평가할 수 있게
                제공합니다.
              </p>
            </div>
          </Ezipcss.StWork>

          <Ezipcss.StWork>
          <div className="titleLogoBox">
            <div className="community" />
            </div>
            <div className="loginContent">
              <h3>◎ 커뮤니티 페이지 </h3>
              <p>
                ♣ 다양한 소통을 위한 페이지로 부동산 관련 내용 또는 사회 이슈등
                을 다루며 유저들간의 재미있는 소통을 유발 시킬 수 있다.
              </p>
              <p>
                ♣ 또한, 다양한 컨텐츠로 인해 유저들의 꾸준한 유입을 증가시킬 수
                있다.
              </p>
            </div>
          </Ezipcss.StWork>
        </div>

        {/* ===============================트러블 슈팅 ========================= */}

        <div>
          <h2 className="h3Title">🪡 트러블 슈팅 </h2>

          <div className="troubleBox">
            <h3>🧐 useEffect "안녕"</h3>
            <div>1. 원인</div>
            <p className="trouble">
              "기존의 redux-toolkit에선 렌더링과 데이터 업데이트 형식에
              useEffect를 사용했지만 react-Query에서는 어떤 함수로 새로운
              데이터를 업데이트 할 수 있을까?" 문제
            </p>

            <div>2. 해결 과정</div>
            <p>
              a. refetchQueries : React Query 캐시에 캐싱된 하나 이상의 쿼리에
              대한 새로운 데이터를 가져오는데 사용
            </p>
            <p className="trouble">
              b. invalidateQueries : 하나 이상의 쿼리를 steal 로 표시하는데 사용
              즉, 캐시의 데이터가 더 이상 최신 상태가 아닌 것을 간주
            </p>

            <div>3. 해결</div>
            <p>
              a. refetchQueries를 사용하게 되면 너무 많은 랜더링을 유발할 수
              있기에 프로젝트의 최적화를 떨어뜨려 적당하지 않다는 생각에
              invalidateQueries를 사용하여 최신 업데이트를 반영
            </p>
          </div>

          <div className="troubleBox">
            <h3>🧐 useInfiniteQuery와 Intersection observer API</h3>
            <div>1. 원인</div>
            <p className="trouble">
              a. 페이지 진입과 동시에 모든 데이터를 get하는 현상으로 로딩시간
              지연
            </p>

            <div>2. 해결 과정</div>
            <p>a. Pagination</p>
            <div className="contents1">
              <p>!. 장점 : 유저 의도에 맞게 페이지 이동 가능</p>
              <p>!!. 단점 : 유저가 버튼 클릭의 추가적인 작업(액션)이 필요</p>
            </div>
            <p>b. Infinite Scroll</p>
            <div className="contents1">
              <p>
                !. 장점 : 스크롤 하나로 많은 양의 데이터를 자연스럽게
                보여줌으로써 사용자 이탈을 막을 수 있음
              </p>
              <p className="trouble">
                !!. 단점 : 특정한 데이터를 다시 찾기 어려움
              </p>
            </div>

            <div>3. 해결</div>
            <p>
              a. InfiniteScroll을 사용해 유저에게 자연스러운 데이터를 만날 수
              있게 구현
            </p>
            <p>
              b. intersection observer API를 사용해 변화를 관찰하고 스크롤 시
              지정된 데이터를 요청해 렌더링
            </p>
          </div>

          <div className="troubleBox">
            <h3>🧐 성능을 위한 최적화</h3>
            <div>1. 원인</div>
            <div className="memorize1" />
            <p className="trouble">
              a. 사용하지 않는 JS와 PNG로 사용하던 Image들, 사용하지 않는
              컴포넌트들의 리랜더링 등 성능이 떨어짐을 판
            </p>

            <div>2. 해결</div>
            <div className="memorize2" />
            <p>
              a. 불필요한 리랜더링에는 React.memo를 사용하고, 재 사용되고 있는
              함수들에게는 useCallback과 useMemo를 사용
            </p>
            <p>b. 재사용이 가능한 기능들은 컴포넌트화 하여 정리</p>
            <p>
              c. 검색기능의 text를 입력할 때 state 값이 바뀌며, 리랜더링을
              유발하는데 이 때 debounce함수가 재 생성 됨, 결론 useCallback로
              함수의 재 생성을 막음
            </p>
          </div>

          {/* ===============================아쉬운 점  ========================= */}

          <div>
            <h2 className="h3Title">😰 아쉬운 점 </h2>
            <div className="ezipContent">
              아쉬운 점 모바일 뷰를 못해봤다
              typesciprt적용을 못했다. 이런 부분에서 아쉽게 프로젝트가 아닌
              팀플레이에서 많이 아쉬움을 표현했다 . 팀원으로 협업을 통해
              움직여야 햇지만 백 서버와의 소통 문제도 있었고 프론트 팀원끼리의
              불화도 있었습니다. 그래서 더욱 완성도 높은 프로젝트가 되진
              못했습니다. 이 점이 매우 아쉬웠습니다. 또한 typescipt적용을
              못한점과 반응형 웹을 만들지 못했던 부분이 너무 아쉬웠다 하지만 !
              이번 프로젝트에서는 완성 못했지만 혼자서 하는 나만의
              프로젝트에서만이라도 꼭 타입스크립트와 반응형 웹을 만들어볼
              생각이다 !! 아자아자 할 수 잇다 !
            </div>
          </div>
        </div>
      </Ezipcss.StBackground>

      <div style={{ height: "100px" }} />
    </>
  );
};

export default Ezipdetail;