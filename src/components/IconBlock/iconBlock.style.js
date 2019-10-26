import styled from 'styled-components';

const BlockRow = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  @media (max-width: 769px) {
    .w100 {
      width: 100%;
    }
  }
`;

const BlockDiv = styled.div`
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
  padding: 0.75rem;

  &:hover {
    .iconStyle {
      fill: #fff;
    }
  }

  .iconStyle {
    -moz-transition: all 0.4s ease 0s;
    -o-transition: all 0.4s ease 0s;
    -webkit-transition: all 0.4s ease 0s;
    transition: all 0.4s ease 0s;
  }

  span.lab {
    display: block;
    font-weight: 500;
    color: #fff;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 36px;
  }
`;

export { BlockRow, BlockDiv };
