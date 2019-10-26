import styled from 'styled-components';

const BlockSkills = styled.div`
  margin-bottom: 50px;

  @media (min-width: 768px) {
    width: 41.66666667%;
    float: left;
    position: relative;
    min-height: 1px;

    &:nth-child(2n) {
      margin-left: 8.33333333%;
    }
  }
`;

const SpanProgress = styled.span`
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  display: block;
  padding-bottom: 10px;
`;

const BarWrap = styled.div`
  position: relative;
  float: left;
  width: 100%;

  span {
    background-color: #ffff50;
    height: 2px;
    width: 0px;
    display: block;
    float: left;
    position: relative;
    overflow: visible !important;

    strong {
      font-size: 0.8em;
      color: #fff;
      opacity: 0;
      display: block;
      float: left;
      position: absolute;
      right: 0px;
      top: -27px;
    }
    i {
      font-style: normal;
    }

    &:after {
      border: 2px solid #ffff50;
      border-radius: 50%;
      content: '';
      height: 15px;
      position: absolute;
      right: 0px;
      background: #141414;
      top: -6px;
      width: 15px;
    }
  }
`;

export { BlockSkills, SpanProgress, BarWrap };
