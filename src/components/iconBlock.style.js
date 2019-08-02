import styled from 'styled-components';

const BlockDiv = styled.div`
  float: left;
  width: 50%;
  margin-bottom: 50px;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 768px) {
    width: 25%;
    float: left;
  }

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
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 36px;
  }
`;

export { BlockDiv };
