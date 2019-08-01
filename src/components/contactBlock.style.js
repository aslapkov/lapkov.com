import styled from 'styled-components';

const ContactWrap = styled.div`
  p {
    &.base {
      margin: 70px 0;

      span {
        text-transform: uppercase;
        margin: 0 50px;

        @media only screen and (max-width: 769px) {
          margin: 0 15px;
        }
      }
    }

    &.social {
      span {
        font-size: 2.7em;

        @media only screen and (max-width: 769px) {
          font-size: 2em;
        }
      }
    }
  }

  a {
    display: inline-block;

    .iconStyle,
    .iconSocStyle {
      -moz-transition: all 0.4s ease 0s;
      -o-transition: all 0.4s ease 0s;
      -webkit-transition: all 0.4s ease 0s;
      transition: all 0.4s ease 0s;
      margin-left: 30px;
    }

    .iconSocStyle {
      margin-right: 30px;

      @media only screen and (max-width: 769px) {
        margin-right: 15px;
        margin-left: 15px;
      }
    }

    &:hover {
      .iconStyle,
      .iconSocStyle {
        fill: #fff;
      }
    }
  }
`;

export { ContactWrap };
