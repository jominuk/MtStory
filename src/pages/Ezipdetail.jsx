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
            프로젝트 <label className="pointColor">'이집은(ezip)'</label>은 직접
            글을 게시하고, 솔직하고 정직한 이야기와 소소한 후기를 나눌 수 있는
            플랫폼으로 설계되었습니다. 프로젝트 초기 회의 때, 부동산 관련 뉴스가
            빈번하게 보도되었고, 저희 팀원들 중 많은 사람들이 부동산 시장에서
            만족스러운 집을 찾지 못하며 헛걸음을 친 경험이 있었습니다. 이런
            경험을 통해, 우리는 솔직한 후기를 공유하고 서로에게 도움을 주는
            플랫폼의 필요성을 깨달았습니다. 또한, 다른 부동산 플랫폼에서는
            보여진 이미지와 실제 방과 구조가 상이하여 실망한 경험이 흔했습니다.
            따라서, 우리는 <label className="pointColor">'이집은(ezip)'</label>
            을 개발하게 되었습니다. 이 플랫폼은 부동산에 직접 매물을 올리지
            않고도 직접 매물을 게시하고 후기를 작성한 후에 부동산과의 계약을
            편리하게 체결할 수 있는 방법을 제공합니다. 우리의 목표는 진솔한
            경험을 공유하며 부동산 시장에서 소비자와 판매자 양쪽에게 도움이 되는
            플랫폼을 구축하는 것입니다.이 플랫폼을 통해 사용자들은 믿을 수 있는
            정보와 솔직한 의견을 공유하며, 적합한 집을 찾는 데 도움을 받을 수
            있게 만들었습니다.
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

          <p>
            ■ Redux Toolkit을 활용한{" "}
            <label className="pointColor">비동기 처리(createAsyncThunk)</label>{" "}
            {""}
            개발 경험👍
          </p>
          <p className="contents1">
            ◻ Redux Toolkit의 createAsyncThunk을 활용하여 비동기 작업을
            효율적으로 처리함
            <br />◻ Redux Toolkit을 활용한 상태 관리는 애플리케이션의 복잡성을
            다루는데 큰 도움이 됨
          </p>

          <p>
            ■ <label className="pointColor">React-Query</label>를 활용한
            프로젝트 경험 👍
          </p>

          <p className="contents1">
            ◻ 서버 사이드 상태를 효과적으로 관리하고, 데이터를 캐싱하여 빠른
            업데이트 가능
            <br />◻ React-Query를 활용하면 캐싱된 데이터를 활용하여 업데이트의
            빠른 반영과 서버 부하 감소를 이룰 수 있음
          </p>

          <p>
            ■ React-Query의 강력한 기능,{" "}
            <label className="pointColor">infiniteQuery</label> 활용 👍
          </p>

          <p className="contents1">
            ◻ infiniteQuery를 활용하여 연속된 데이터를 순차적으로 표시
            <br />◻ 일부 데이터를 먼저 렌더링하고 사용자 경험을 최적화하여 로딩
            시간 단축
          </p>

          <p>
            ■ 고객 피드백을 반영한 <label className="pointColor">UX 개선</label>{" "}
            경험 👍
          </p>

          <p className="contents1">
            ◻ 로그인이 필요한 페이지에서 사용자를 강제로 이동시키는 문제를
            Private Routes와 같은 방법을 활용하여 해결
            <br />◻ 하단 스크롤 화면에서 페이지 전환 시 상단 스크롤 위치 유지를
            위해 useLocation을 활용하여 해결
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
            <Ezipcss.StVideoBox>
              <ReactPlayer
                url="video/mypage.mp4"
                width="400px"
                height="280px"
                className="video"
                muted={true}
                playing={true}
                loop={true}
              />
            </Ezipcss.StVideoBox>

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
            <Ezipcss.StVideoBox>
              <ReactPlayer
                url="video/review.mp4"
                className="video"
                width="400px"
                height="280px"
                muted={true} //chrome정책으로 인해 자동 재생을 위해 mute 옵션을 true로 해주었다.
                playing={true}
                loop={true}
              />
            </Ezipcss.StVideoBox>
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
              a. <label className="pointColor1">refetchQueries</label> : React
              Query 캐시에 캐싱된 하나 이상의 쿼리에 대한 새로운 데이터를
              가져오는데 사용
            </p>
            <p className="trouble">
              b. <label className="pointColor1">invalidateQueries</label> : 하나
              이상의 쿼리를 steal 로 표시하는데 사용 즉, 캐시의 데이터가 더 이상
              최신 상태가 아닌 것을 간주
            </p>

            <div>3. 해결</div>
            <p>
              a. <label className="pointColor1">refetchQueries를</label>{" "}
              사용하게 되면 너무 많은 랜더링을 유발할 수 있기에 프로젝트의
              최적화를 떨어뜨려 적당하지 않다는 생각에
              <label className="pointColor1">invalidateQueries를</label>{" "}
              사용하여 최신 업데이트를 반영
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
            <p>
              a. <label className="pointColor1">Pagination</label>
            </p>
            <div className="contents1">
              <p>!. 장점 : 유저 의도에 맞게 페이지 이동 가능</p>
              <p>!!. 단점 : 유저가 버튼 클릭의 추가적인 작업(액션)이 필요</p>
            </div>
            <p>
              b. <label className="pointColor1">Infinite Scroll</label>
            </p>
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
              a. <label className="pointColor1">InfiniteScroll을</label> 사용해
              유저에게 자연스러운 데이터를 만날 수 있게 구현
            </p>
            <p>
              b.{" "}
              <label className="pointColor1">intersection observer API를</label>{" "}
              사용해 변화를 관찰하고 스크롤 시 지정된 데이터를 요청해 렌더링
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
              a. 불필요한 리랜더링에는{" "}
              <label className="pointColor1">React.memo</label>를 사용하고, 재
              사용되고 있는 함수들에게는{" "}
              <label className="pointColor1">useCallback</label>과{" "}
              <label className="pointColor1">useMemo</label>를 사용
            </p>
            <p>b. 재사용이 가능한 기능들은 컴포넌트화 하여 정리</p>
            <p>
              c. 검색기능의 text를 입력할 때 state 값이 바뀌며, 리랜더링을
              유발하는데 이 때 debounce함수가 재 생성 됨, 결론{" "}
              <label className="pointColor1">useCallback</label>로 함수의 재
              생성을 막음
            </p>
          </div>

          {/* ===============================아쉬운 점  ========================= */}

          <div>
            <h2 className="h3Title">😰 아쉬운 점 </h2>
            <div className="ezipContent">
              프로젝트를 완료하고 런칭한 후, 몇가지 아쉬운 점이 많았습니다. 물론
              시간적 여유가 있었다면 추가적인 기능을 고려하고 있었지만, 시간과
              팀원간의 협업에 일부 어려움이 있어 이를 구현하지 못한 것이
              아쉬웠습니다. 프로젝트 초창기에는{" "}
              <label className="pointColor">TypeScript</label>를 도입해보고자
              했지만, 팀 내에서{" "}
              <label className="pointColor">React-Query</label>만 사용하기로
              결정했기 때문에 이 역시 아쉬움으로 남아있습니다. 특히, 프로젝트
              완료 후 다른 회사들이
              <label className="pointColor">TypeScript</label>를 널리 사용하고
              있다는 사실을 알게 되어 더 아쉬웠습니다. 또한, 원활한
              의사소통에서도 아쉬운점이 많았습니다. 백엔드와의 소통 문제와 팀 내
              갈등으로 인해 프로젝트의 완성도를 높히지 못한 부분이 아쉬웠습니다.
              그러나 이러한 아쉬움을 격려로 바꾸고, 혼자서라도 개인 프로젝트를
              통해 <label className="pointColor">TypeScript</label>활용과{" "}
              <label className="pointColor">반응형 웹</label> 개발에 도전하려고
              합니다.
            </div>
          </div>
        </div>
      </Ezipcss.StBackground>

      <div style={{ height: "100px" }} />
    </>
  );
};

export default Ezipdetail;
