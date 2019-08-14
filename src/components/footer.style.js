import styled from 'styled-components';

const FooterWrap = styled.footer`
  margin: 0 auto;
  overflow: hidden;
  float: none;
  clear: both;
  padding: 60px 20px;

  @media (min-width: 768px) {
    width: 91.66666667%;
  }

  @media (min-width: 950px) {
    width: 83.33333333%;
  }

  a {
    font-size: 1.05em;
    color: #777;
    font-weight: 700;
    -moz-transition: all 0.4s ease 0s;
    -o-transition: all 0.4s ease 0s;
    -webkit-transition: all 0.4s ease 0s;
    -webkit-transition: all 0.4s ease 0s;
    transition: all 0.4s ease 0s;

    &:hover {
      color: #fff;
    }
  }
`;

const FooterLeft = styled.div`
  float: left;
  width: 70%;
`;

const AvailPoint = styled.span`
  background: #e91e63 none repeat scroll 0 0;
  position: relative;
  display: inline-block;
  float: left;
  width: 14px;
  height: 14px;
  margin-left: 8px;
  margin-right: 32px;
  margin-top: 7px;
  border-radius: 50%;
  float: left;
  -webkit-animation-name: blinking;
  animation-name: blinking;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  content: ' ';

  @-webkit-keyframes blinking {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @-moz-keyframes blinking {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes blinking {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  &:before {
    background-color: #e91e63;
    content: ' ';
    position: absolute;
    top: -8px;
    left: -8px;
    display: inline-block;
    width: 30px;
    height: 30px;
    opacity: 0.2;
    border-radius: 50%;
  }

  @media (max-width: 769px) {
    margin-right: 15px;
  }
`;

const AvailTag = styled.span`
  font-size: 0.9em;
  color: #fff;
  display: block;
  float: left;

  span {
    @media (max-width: 769px) {
      font-size: 0.9em;
    }
  }

  @media (max-width: 769px) {
    font-size: 0.8em;
  }
`;

const FooterRigth = styled.div`
  float: right;
  text-align: right;
  width: 30%;

  .links {
    font-size: 0.6em;

    @media only screen and (max-width: 769px) {
      font-size: 7.5px;
    }
  }
`;

export { FooterWrap, FooterLeft, AvailPoint, AvailTag, FooterRigth };
