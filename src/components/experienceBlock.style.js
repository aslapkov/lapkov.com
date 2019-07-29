import styled from 'styled-components';

const TimelineWrap = styled.div`
  &.active {
    opacity: 1 !important;

    .linest {
      &:after {
        border: 3px solid #e91e63;
      }
    }
  }

  &.inactive {
    opacity: 0.3;
  }

  .linest {
    background: rgba(255, 255, 255, 0.15);
    margin-left: 7px;
    margin-top: 15px;
    width: 1px;

    &:after {
      border: 3px solid rgba(255, 255, 255, 0.15);
      border-radius: 50%;
      content: '';
      height: 15px;
      left: 15px;
      position: absolute;
      top: 0;
      width: 15px;
      -moz-transition: all 0.4s ease 0s;
      -o-transition: all 0.4s ease 0s;
      -webkit-transition: all 0.4s ease 0s;
      transition: all 0.4s ease 0s;
    }
  }

  &:before,
  &:after {
    display: table;
    content: ' ';
  }

  &:after {
    clear: both;
  }
`;

const Col2 = styled.div`
  width: 16.66666667%;
  float: left;
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
`;

const Col10 = styled.div`
  width: 83.33333333%;
  float: right;
  opacity: 1;
  -moz-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
`;

const ColSm3 = styled.div`
  width: 25%;
  float: left;
  padding-right: 15px;
  padding-left: 15px;

  span {
    color: #fff;
    font-family: 'Hind', sans-serif;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

const ColSm9 = styled.div`
  width: 75%;
  float: left;
  padding-right: 15px;
  padding-left: 15px;

  span {
    display: block;
    font-size: 16px;
  }

  .desc {
    font-family: 'Hind', sans-serif;
    color: #ccc;
    padding-bottom: 5px;
  }

  .loc {
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    padding-bottom: 15px;
  }

  .psmall {
    font-size: 14px;
    color: #ccc;
    line-height: 27px;
  }
`;

export { TimelineWrap, Col2, Col10, ColSm3, ColSm9 };