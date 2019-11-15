import styled from 'styled-components';

const BlockWorks = styled.div`
  margin-top: 40px;
`;

const DivWorks = styled.div`
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
  float: left;
  padding: 30px 10px;
  width: 100%;

  &.first {
    border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
    border-top: 1px dashed rgba(255, 255, 255, 0.1);
  }

  &:nth-child(even) {
    background: rgba(255, 255, 255, 0.04);
  }

  span {
    font-size: 0.9em;
    color: #fff;
    padding-top: 8px;
    display: block;
    line-height: 1.3;

    @media (max-width: 768px) {
      font-size: 0.8em;
    }
  }

  span.count {
    height: 35px;
    width: 35px;
    display: table;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    text-align: center;
    padding-top: 0;

    @media (max-width: 768px) {
      height: 27px;
      width: 27px;
    }

    span {
      padding-top: 1px;
      display: table-cell;
      vertical-align: middle;
    }
  }

  span.year {
    font-size: 1em;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 0.7em;
    }
  }

  span.siteUrl {
    margin-left: 10px;
    text-align: right;
  }
`;

const Col2 = styled.div`
  width: 12.5%;
  float: left;
`;

const Col3 = styled.div`
  width: 25%;
  float: left;
`;

const Col5 = styled.div`
  width: 50%;
  float: left;
`;

export { BlockWorks, DivWorks, Col2, Col3, Col5 };
