import styled from 'styled-components';

const ContactWrap = styled.div`
  p {
    &.base {
      margin: 40px 0 70px;
    }
  }

  a {
    border: none;
    .iconStyle,
    .iconSocStyle {
      -moz-transition: all 0.4s ease 0s;
      -o-transition: all 0.4s ease 0s;
      -webkit-transition: all 0.4s ease 0s;
      transition: all 0.4s ease 0s;
      margin: 10px 5px 0 0;
    }

    .iconSocStyle {
      margin: 0 5px;
    }

    &:hover {
      .iconStyle,
      .iconSocStyle {
        fill: #fff;
      }
    }
  }

  .notification {
    display: inline-block;
    background: rgba(18, 141, 21, 0.25);
    padding: 5px 15px;
    border-left: 2px solid #128d15;
  }

  .social {
    display: inline-block;
    margin-top: 30px;
  }
`;

const FormGroup = styled.div`
  float: left;
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 36px;
  width: 50%;
  /*overflow: hidden;*/

  &.full {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  button {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 700;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    background: #fff;
    color: #141414;
    letter-spacing: 1.5px;
    overflow: hidden;
    position: relative;
    text-transform: uppercase;
    height: 37px;
    outline: none;
    border: none;
    border-radius: 2px;
    padding: 7px 20px;
    -moz-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;
    -o-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;
    -webkit-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;
    transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;

    &:disabled {
      cursor: not-allowed;
      filter: alpha(opacity=65);
      -webkit-box-shadow: none;
      box-shadow: none;
      opacity: 0.5;

      &:hover .mask {
        width: 0;
      }
    }

    span {
      position: relative;
      z-index: 2;
      display: inline-block;
    }

    .mask {
      background: #ffff50;
      border-radius: 2px;
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

    &:hover {
      background: #fff !important;
    }

    &:hover .mask {
      width: 100%;
    }
  }
`;

const InputWrap = styled.div`
  overflow: hidden;
  position: relative;

  input,
  textarea {
    position: relative;
    background: transparent none repeat scroll 0 0;
    border: none;
    box-shadow: none;
    color: #fff;
    display: block;
    overflow: hidden;
    font-size: 16px;
    padding-left: 0;
    padding-bottom: 18px;
    padding-top: 13px;
    height: 80px;
    width: 100%;
    outline: none;
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    webkit-transition: border-color ease-in-out 0.15s,
      -webkit-box-shadow ease-in-out 0.15s;
    -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;

    &:focus {
      border-color: #fff;
      box-shadow: none;
    }

    &:focus + .input-label {
      &:after {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }
  }

  textarea {
    height: 150px;
  }

  .input-label {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 1px);
    text-align: left;
    pointer-events: none;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: -1px;
      width: 100%;
      height: 100%;
      border-bottom: 2px solid #454648;
    }

    &:after {
      border-color: #fff;
      margin-top: 0;
      border-bottom: 2px solid #eee;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      -webkit-transition: -webkit-transform 0.3s;
      transition: transform 0.3s;
    }
  }
`;

export { ContactWrap, FormGroup, InputWrap };
