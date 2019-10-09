import styled from 'styled-components';

const ImgDiv = styled.div`
  height: 100%;
  width: 120%;
  z-index: -1;
  position: fixed;
  background-position: center;
  background-size: cover;
  -moz-transform: translateZ(0);
  -o-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;

  @media only screen and (max-width: 950px) {
    display: none;
  }
`;

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  .loader {
    border-style: solid;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -13px;
    border-color: #ffff50 #ffff50 transparent;
    -webkit-animation: revolve 0.7s linear infinite;
    animation: revolve 0.7s linear infinite;
    width: 26px;
    height: 26px;
    border-radius: 26px;
    border-width: 2px;
  }

  @-webkit-keyframes revolve {
    from {
      -webkit-transform: rotate(0deg);
    }
    50% {
      -webkit-transform: rotate(180deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes revolve {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    50% {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const Row = styled.div`
  margin: 0 -15px;
`;

const Col4 = styled.div`
  @media (min-width: 950px) {
    width: 33.33333333%;
    float: left;
    position: relative;
  }

  @media only screen and (max-width: 950px) {
    display: none;
  }
`;

const Col8 = styled.div`
  width: 100%;

  @media (min-width: 950px) {
    width: 66.66666667%;
    float: right;
    position: relative;
  }

  hr {
    border-color: #ffff50;
    border: 0;
    border-top: 1px solid #eee;
    margin-bottom: 0;
  }
`;

const Content = styled.div`
  background: rgba(20, 20, 20, 0.9);
  margin-top: 120px;
  border-top-left-radius: 10px;
  -moz-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  -o-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  -webkit-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;

  @media only screen and (max-width: 950px) {
    background: #141414;
    margin-top: 0;
    border-radius: 0;
  }
`;

const Main = styled.main`
  margin: 0 auto;
  overflow: hidden;
  float: none;
  clear: both;
  padding: 90px 10px 60px;

  @media (min-width: 951px) {
    width: 83.33333333%;
  }

  @media (max-width: 950px) {
    width: 91.66666667%;
  }

  h1 {
    height: 44px;
  }

  h3 {
    color: #fff;
  }

  h4 {
    color: #ffff50;
  }

  blockquote {
    border-left-color: #ffff50;
    border-left-width: 2px;
    border-left-style: solid;
  }

  p {
    font-weight: 500;
  }

  a {
    color: #ffff50;
    font-weight: 700;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }

  img {
    border-radius: 50% !important;
  }

  .imageDiv {
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 30px;
  }
`;

export { ImgDiv, Container, Row, Col4, Col8, Content, Main };