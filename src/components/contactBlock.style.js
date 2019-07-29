import styled from 'styled-components';

const ContactWrap = styled.div`
  a {
    .iconStyle {
      -moz-transition: all 0.4s ease 0s;
      -o-transition: all 0.4s ease 0s;
      -webkit-transition: all 0.4s ease 0s;
      transition: all 0.4s ease 0s;
    }

    &:hover {
      .iconStyle {
        fill: #fff;
      }
    }
  }
`;

export { ContactWrap };
