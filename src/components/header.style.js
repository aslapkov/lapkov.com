import styled from 'styled-components';

const HeaderWrap = styled.header`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  height: 70px;

  @media only screen and (max-width: 950px) {
    top: 0px;
    margin-top: 50px;
    width: 100%;
    position: fixed;
    z-index: 99;
    background: rgba(255, 255, 255, 0.9);
    -moz-transform: translateY(-70px) translateZ(0);
    -o-transform: translateY(-70px) translateZ(0);
    -ms-transform: translateY(-70px) translateZ(0);
    -webkit-transform: translateY(-70px) translateZ(0);
    transform: translateY(-70px) translateZ(0);
  }
`;

const HeaderCol = styled.div`
  width: 83.33333333%;
  padding-top: 20px;
  margin: 0 auto;
  overflow: hidden;
  float: none;
  clear: both;

  @media only screen and (max-width: 950px) {
    width: 100%;
  }

  a {
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
    padding: 16px;

    @media only screen and (max-width: 950px) {
      color: #000;
    }
  }
`;

const HeaderTouch = styled.div`
  a.contact,
  button {
    font-size: 0.85em;
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

    &.button {
      display: none;
    }

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
      padding-bottom: 5px;

      .iconPlane {
        margin-left: 10px;
      }

      .iconCall {
        display: none;
        margin-left: 10px;
      }

      @media only screen and (max-width: 950px) {
        padding-bottom: 0;
        padding-top: 0;

        b {
          display: none;
        }

        .iconPlane {
          display: none;
        }

        .iconCall {
          display: block;
          margin-left: 0;
        }
      }
    }

    &:hover .mask {
      width: 100%;

      @media only screen and (max-width: 950px) {
        width: 0;
      }
    }

    @media only screen and (max-width: 950px) {
      padding: 14px 80px 11px 0;
      background: none !important;
      color: #000;

      .iconMenu {
        display: block;
        margin-right: 30px;
      }

      .lineMenu {
        display: block;
        background: #000;
        z-index: 3;
        width: 30px;
        height: 2px;
        transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

        &.lineTop {
          position: absolute;
          transform: translateY(-3px);
          -moz-transition: 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.1008s;
          -o-transition: 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.1008s;
          -webkit-transition: 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84)
            0.1008s;
          transition: transform 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84)
            0.1008s;
        }

        &.lineBottom {
          position: absolute;
          transform: translateY(3px);
          -moz-transition: 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.1008s;
          -o-transition: 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.1008s;
          -webkit-transition: 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84)
            0.1008s;
          transition: transform 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84)
            0.1008s;
        }
      }

      &.button {
        display: block;
        cursor: pointer;
        padding: 25px 20px;
        position: absolute;
        right: 0;
      }
    }
  }

  @media only screen and (max-width: 950px) {
    position: relative;
    z-index: 1;

    a.contact,
    button {
      border: none;
    }

    &.menuOpen {
      .lineMenu {
        &.lineTop {
          -moz-transition: 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.1008s;
          -o-transition: 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.1008s;
          -webkit-transition: 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84)
            0.1008s;
          transition: transform 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96)
            0.1008s;
          transform: rotate(45deg);
        }

        &.lineBottom {
          -moz-transition: 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.1008s;
          -o-transition: 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.1008s;
          -webkit-transition: 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84)
            0.1008s;
          transition: transform 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96)
            0.1008s;
          transform: rotate(-45deg);
        }
      }
    }
  }
`;

const HeaderNav = styled.nav`
  display: none;

  @media only screen and (max-width: 950px) {
    display: block;
    position: relative;
    height: 0;
    z-index: 1;
    margin-bottom: 0;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;

    &.collapse {
      height: 430px;
      -webkit-transition: height 0.5s ease 0s;
      -moz-transition: height 0.5s ease 0s;
      -ms-transition: height 0.5s ease 0s;
      -o-transition: height 0.5s ease 0s;
      transition: height 0.5s ease 0s;

      .navbarNav {
        display: block !important;
        opacity: 1;
        padding: 40px 0;
        box-shadow: none;
        overflow-x: visible;
        -webkit-overflow-scrolling: touch;
        border-top: 1px solid transparent;
        -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);

        ul {
          float: none !important;

          li {
            float: none;
            position: relative;
            display: block;

            a {
              color: #000;
              line-height: 20px;
              position: relative;
              display: block;
              padding: 20px 15px;

              &.contact,
              button {
                border: none;
              }

              span {
                display: block;
                color: #141414;
                font-size: 17px;
                letter-spacing: 1.5px;
                line-height: 1;
                text-transform: uppercase;
              }
            }
          }
        }
      }
    }
  }

  .navbarNav {
    opacity: 0;
    margin-top: 50px;
  }
`;

export { HeaderWrap, HeaderCol, HeaderLogo, HeaderTouch, HeaderNav };
