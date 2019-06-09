import styled from 'styled-components';

const HeaderWrap = styled.header`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  height: 70px;
  -moz-transition: transform 0.6s ease 0s;
  -o-transition: transform 0.6s ease 0s;
  -webkit-transition: transform 0.6s ease 0s;
  transition: transform 0.6s ease 0s;

  @media only screen and (max-width: 950px) {
    top: 0px;
    margin-top: 70px;
    width: 100%;
    position: fixed;
    z-index: 99;
    background: #555;
    -moz-transform: translateY(-70px) translateZ(0);
    -o-transform: translateY(-70px) translateZ(0);
    -ms-transform: translateY(-70px) translateZ(0);
    -webkit-transform: translateY(-70px) translateZ(0);
    transform: translateY(-70px) translateZ(0);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -moz-transition: margin 0.6s ease 0s, transform 0.6s ease 0s;
    -o-transition: margin 0.6s ease 0s, transform 0.6s ease 0s;
    -webkit-transition: margin 0.6s ease 0s, transform 0.6s ease 0s;
    transition: margin 0.6s ease 0s, transform 0.6s ease 0s;
  }
`;

const HeaderCol = styled.div`
  width: 83.33333333%;
  padding-top: 16px;
  margin: 0 auto;
  overflow: hidden;
  float: none;
  clear: both;

  a {
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
  }
`;

const HeaderLogo = styled.div`
  a {
    float: left;
    display: block;
    color: #fff;
    padding-top: 7px;
  }
`;

const HeaderTouch = styled.div`
  a {
    font-size: 0.8em;
    float: right;
    color: #fff;
    overflow: hidden;
    position: relative;
    background: #141414;
    outline: none;
    border: none;
    border-left: 1px solid #e91e63;
    padding: 5px 20px;
    -moz-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;
    -o-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;
    -webkit-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;
    transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;

    .mask {
      background: #e91e63;
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 0;
      z-index: 1;
      -moz-transition: all 1.1s cubic-bezier(0.19, 1, 0.22, 1) 0s;
      -o-transition: all 1.1s cubic-bezier(0.19, 1, 0.22, 1) 0s;
      -webkit-transition: all 1.1s cubic-bezier(0.19, 1, 0.22, 1) 0s;
      transition: all 1.1s cubic-bezier(0.19, 1, 0.22, 1) 0s;
    }

    .label {
      position: relative;
      z-index: 2;
      display: inline-block;
    }

    &:hover .mask {
      width: 100%;
    }
  }
`;

export { HeaderWrap, HeaderCol, HeaderLogo, HeaderTouch };
