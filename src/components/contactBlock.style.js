import styled from 'styled-components';

const ContactWrap = styled.div`
  p {
    &.base {
      margin: 70px 0;

      span {
        text-transform: uppercase;
        margin: 0 20px;

        @media only screen and (max-width: 769px) {
          margin: 0 10px;
        }
      }
    }
  }

  a {
    display: inline-block;
    font-size: 0.8em;

    .iconStyle,
    .iconSocStyle {
      -moz-transition: all 0.4s ease 0s;
      -o-transition: all 0.4s ease 0s;
      -webkit-transition: all 0.4s ease 0s;
      transition: all 0.4s ease 0s;
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
`;

export { ContactWrap };
