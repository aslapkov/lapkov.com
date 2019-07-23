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
`;

const Row = styled.div`
  margin-right: -15px;
  margin-left: -15px;
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
    border-color: #e91e63;
    border: 0;
    border-top: 1px solid #eee;
  }
`;

const Content = styled.div`
  background: #141414;
  margin-top: 150px;
  border-top-left-radius: 10px;
  -moz-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  -o-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  -webkit-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;

  @media only screen and (max-width: 950px) {
    margin-top: 70px;
    border-radius: 0;
  }
`;

const Main = styled.main`
  margin: 0 auto;
  overflow: hidden;
  float: none;
  clear: both;
  padding: 60px 20px;

  a {
    color: #e91e63;
    font-weight: 700;
    opacity: 0.8;
    border-bottom: 1px dotted #e91e63;

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

  @media (min-width: 768px) {
    width: 91.66666667%;
  }

  @media (min-width: 950px) {
    width: 83.33333333%;
  }
`;

export { ImgDiv, Container, Row, Col4, Col8, Content, Main };
