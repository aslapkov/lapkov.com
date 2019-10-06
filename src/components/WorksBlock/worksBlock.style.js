import styled from 'styled-components';

const BlockWorks = styled.div`
  margin-top: 40px;
`;

const DivWorks = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  float: left;
  padding: 30px 10px;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;

  &.first {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  &:nth-child(even) {
    background: rgba(255, 255, 255, 0.04);
  }

  span {
    font-size: 13px;
    color: #fff;
    font-weight: 600;
    padding-top: 8px;
    display: block;
  }

  span.count {
    font-size: 12px;
    height: 35px;
    width: 35px;
    display: table;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    text-align: center;
    padding-top: 0;

    span {
      padding-top: 2px;
      display: table-cell;
      vertical-align: middle;
    }
  }

  span.year {
    font-size: 14px;
    letter-spacing: 0.5px;
  }

  span.siteUrl {
    margin-left: 10px;
  }
`;

const Col2 = styled.div`
  width: 16.66666667%;
  float: left;
`;

const Col3 = styled.div`
  width: 25%;
  float: left;
`;

const Col5 = styled.div`
  width: 41.66666667%;
  float: left;
`;

export { BlockWorks, DivWorks, Col2, Col3, Col5 };
