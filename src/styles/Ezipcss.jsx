import styled from "styled-components";

export const Ezipcss = {
  StBackground: styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Sunflower:wght@300;500;700&display=swap");
    margin: 50px auto;
    font-family: "Sunflower", sans-serif;
    .titleBox {
      display: flex;
      align-items: center;
      height: 130px;
      border-bottom: 1px solid #ccc;
    }

    .imgBox {
      width: 70px;
      height: 70px;
      margin: 0 20px;
    }

    h1 {
      font-weight: 600;
    }
    .h3Title {
      margin: 100px 0 40px 0;
    }
    .ezipContent {
      line-height: 40px;
    }
    .LogoImage {
      width: 140px;
      height: 25px;
      margin-right: 20px;
    }

    .Link {
      color: #135e79;
      border-bottom: 2px solid powderblue;
      width: 120px;
      cursor: pointer;
      margin-right: 50px;
    }
    .Link2 {
      color: #135e79;
      border-bottom: 2px solid powderblue;
      width: 100px;
      cursor: pointer;
    }
    .contents1 {
      width: 98%;
      margin-left: 2%;
    }

    .troubleBox {
      padding: 10px 20px 10px 30px;
      border: 3px solid #ccc;
      border-radius: 30px;
      margin-bottom: 50px;

      div {
        margin-top: 30px;
      }
    }

    .trouble {
      height: 120px;
      border-bottom: 2px dashed #ccc;
    }
    .memorize1 {
      width: 350px;
      height: 260px;
      margin: 20px 0 20px 30px;
      background: url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbtrtGH%2FbtstqZLNqST%2FxvrowmEsM3ccZgCL2VrTP0%2Fimg.png")
        no-repeat center center;
      background-size: cover;
    }
    .memorize2 {
      width: 400px;
      height: 260px;
      margin: 20px 0 20px 30px;
      background: url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FU2ofg%2Fbtsth5fJilm%2FnWDnfoGqPUujp2jEXFgz2K%2Fimg.png")
        no-repeat center center;
      background-size: cover;
    }

    @media screen and (min-width: 1500px) {
      width: 50%;
    }

    @media screen and (min-width: 1000px) and (max-width: 1499px) {
      width: 70%;
    }

    @media screen and (min-width: 700px) and (max-width: 999px) {
      width: 80%;
    }

    @media screen and (max-width: 699px) {
      width: 80%;

      .memorize1 {
        width: 250px;
        height: 200px;
        margin: 20px 0 20px 30px;
        background: url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbtrtGH%2FbtstqZLNqST%2FxvrowmEsM3ccZgCL2VrTP0%2Fimg.png")
          no-repeat center center;
        background-size: cover;
      }
      .memorize2 {
        width: 280px;
        height: 180px;
        margin: 20px 0 20px 30px;
        background: url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FU2ofg%2Fbtsth5fJilm%2FnWDnfoGqPUujp2jEXFgz2K%2Fimg.png")
          no-repeat center center;
        background-size: cover;
      }
    }
  `,

  StVideoBox: styled.div`
    @media screen and (max-width: 599px) {
      width: 350px;
      height: 230px;
      margin: 0 auto;

      .video {
        width: 100% !important;
        height: 100% !important;
      }
    }
  `,

  StWork: styled.div`
    @media screen and (min-width: 1000px) {
      display: flex;
      width: 100%;
      margin-bottom: 30px;

      .kakaoLogin {
        width: 400px;
        height: 280px;
        background: url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcgxXaI%2Fbtsth7dsyck%2FK4GznTGVMH0rTDRYzB1ZVk%2Fimg.png")
          no-repeat center center;
        background-size: cover;
      }
      .loginContent {
        display: flex;
        flex-direction: column;
        justify-content: center;

        height: 270px;
        padding: 0 0 0 30px;
      }

      .community {
        width: 400px;
        height: 280px;
        background: url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbagMzR%2FbtstkqqxCjF%2FWKuUCuv7QRdzJIytAkOhU1%2Fimg.png")
          no-repeat center center;
        background-size: cover;
      }
    }

    @media screen and (min-width: 500px) and (max-width: 999px) {
      .kakaoLogin {
        width: 400px;
        height: 280px;
        background: url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcgxXaI%2Fbtsth7dsyck%2FK4GznTGVMH0rTDRYzB1ZVk%2Fimg.png")
          no-repeat center center;
        background-size: cover;
      }
      .loginContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 280px;
      }

      .community {
        width: 400px;
        height: 280px;
        background: url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbagMzR%2FbtstkqqxCjF%2FWKuUCuv7QRdzJIytAkOhU1%2Fimg.png")
          no-repeat center center;
        background-size: cover;
      }
    }

    @media screen and (max-width: 599px) {
      width: 100%;
      margin-top: 50px;

      .titleLogoBox {
        width: 320px;
        height: 220px;
        margin: 0 auto;
      }
      .kakaoLogin {
        width: 100%;
        height: 100%;
        background: url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcgxXaI%2Fbtsth7dsyck%2FK4GznTGVMH0rTDRYzB1ZVk%2Fimg.png")
          no-repeat center center;
        background-size: cover;
      }
      .loginContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 350px;
      }

      .community {
        width: 100%;
        height: 100%;
        background: url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbagMzR%2FbtstkqqxCjF%2FWKuUCuv7QRdzJIytAkOhU1%2Fimg.png")
          no-repeat center center;
        background-size: cover;
      }
    }
  `,
};
