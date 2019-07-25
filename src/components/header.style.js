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
  padding-top: 20px;
  margin: 0 auto;
  overflow: hidden;
  float: none;
  clear: both;

  a {
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
  }

  @media only screen and (max-width: 950px) {
    width: 100%;
  }
`;

const HeaderLogo = styled.div`
  margin-left: 20px;

  a {
    float: left;
    display: block;
    color: #fff;
    padding-top: 13px;

    @media only screen and (max-width: 950px) {
      color: #000;
    }
  }
`;

const HeaderTouch = styled.div`
  a.contact,
  button {
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

      .iconCall {
        margin-left: 10px;
      }

      @media only screen and (max-width: 950px) {
        padding-bottom: 0;
        padding-top: 0;

        b {
          display: none;
        }

        .iconCall,
        .iconMenu {
          display: block;
          margin-left: 0;
        }
      }
    }

    &:hover .mask {
      width: 100%;
    }

    @media only screen and (max-width: 950px) {
      padding: 7px 10px;
      background: none !important;
      color: #000;
      margin-top: 8px;

      &.button {
        display: block;
        margin-left: 15px;
        margin-right: 20px;
      }
    }
  }

  nav {
    display: none;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -moz-transition: margin 0.6s ease 0s, transform 0.6s ease 0s;
    -o-transition: margin 0.6s ease 0s, transform 0.6s ease 0s;
    -webkit-transition: margin 0.6s ease 0s, transform 0.6s ease 0s;
    transition: margin 0.6s ease 0s, transform 0.6s ease 0s;

    @media only screen and (max-width: 950px) {
      &.collapse {
        display: block;
        margin-bottom: 0;
        background: rgba(255, 255, 255, 0.9);
        border: none;

        .navbarNav {
          display: block !important;
          padding-top: 50px;
          box-shadow: none;
          overflow-y: auto;
          overflow-x: visible;
          -webkit-overflow-scrolling: touch;
          border-top: 1px solid transparent;
          -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);

          ul {
            margin-top: 0;
            margin-left: 0;
            margin-right: 0;
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

                span {
                  display: block;
                  color: #141414;
                  font-size: 16px;
                  font-weight: 500;
                  letter-spacing: 1.5px;
                  line-height: 1;
                  text-transform: uppercase;
                  -moz-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;
                  -o-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;
                  -webkit-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;
                  transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;
                }
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 950px) {
    position: relative;
    z-index: 1;

    a.contact,
    button {
      border-left: 1px solid #141414;
    }
  }
`;

export { HeaderWrap, HeaderCol, HeaderLogo, HeaderTouch };
