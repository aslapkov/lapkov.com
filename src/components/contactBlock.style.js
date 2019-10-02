import styled from 'styled-components';

const ContactWrap = styled.div`
  p {
    &.base {
      margin: 50px 0;
    }
  }

  a {
    font-size: 0.9em;

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
`;

export { ContactWrap };
