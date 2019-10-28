import styled from 'styled-components';

const TimelineWrap = styled.div`
  &:before,
  &:after {
    display: table;
    content: ' ';
  }

  &:after {
    clear: both;
  }

  &:hover {
    opacity: 1 !important;

    .linest {
      &:after {
        border: 3px solid #ffff50;
      }
    }
  }

  &.active {
    opacity: 1;
    -moz-transition: all 0.5 ease 0s;
    -o-transition: all 0.5s ease 0s;
    -webkit-transition: all 0.5s ease 0s;
    transition: all 0.5s ease 0s;

    .linest {
      &:after {
        border: 3px solid #ffff50;
      }
    }
  }

  &.inactive {
    opacity: 0.4;
    -moz-transition: all 0.5s ease 0s;
    -o-transition: all 0.5s ease 0s;
    -webkit-transition: all 0.5s ease 0s;
    transition: all 0.5s ease 0s;
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

  span {
    color: #fff;
    font-size: 0.8em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    @media (max-width: 768px) {
      font-size: 0.7em;
    }
  }
`;

const ColSm9 = styled.div`
  width: 75%;
  float: left;
  padding-right: 15px;
  padding-left: 15px;

  span {
    display: block;
  }

  .desc {
    color: #ccc;
    padding-bottom: 15px;
    text-transform: uppercase;
  }

  .loc {
    font-weight: 700;
    color: #fff;
    padding-bottom: 15px;

    a {
      font-size: 0.85em;
    }

    @media (max-width: 769px) {
      font-size: 0.9em;

      a {
        font-size: 0.8em;
      }
    }
  }

  .psmall {
    font-size: 0.95em;
    color: #ccc;
    line-height: 25px;

    @media (max-width: 769px) {
      line-height: 20px;
      font-size: 0.9em;
    }
  }
`;

export { TimelineWrap, Col2, Col10, ColSm3, ColSm9 };
