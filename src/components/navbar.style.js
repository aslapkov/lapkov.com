import styled from 'styled-components';

const NavStyle = styled.nav`
  position: fixed;
  -moz-transform: translateZ(0);
  -o-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  top: 40%;
  left: 129px;
  min-height: 50px;
  margin-bottom: 20px;
  -moz-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  background: none;
  border: none;
  -moz-transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  -o-transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  -webkit-transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0s;
`;

const NavCollapse = styled.div`
  border-color: #e7e7e7;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 768px) {
    display: block !important;
    height: auto !important;
    padding-bottom: 0;
    overflow: visible !important;
    width: auto;
    border-top: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  ul {
    padding-left: 0;
    list-style: none;
    margin: 7.5px -15px;

    li {
      display: block;
      position: relative;
      float: none;
      height: 7px;
      margin-bottom: 29px;
      width: 50px;

      a {
        font-family: 'Lato', sans-serif;
        background: none;
        border: none;
        padding: 0;

        span {
          font-size: 0.9em;
          left: 60px;
          line-height: 1;
          color: #fff;
          position: absolute;
          opacity: 0.5;
          text-transform: uppercase;
          -moz-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;
          -o-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;
          -webkit-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;
          transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;

          &.hide {
            display: none;
          }
        }

        &:hover,
        &:active,
        &:focus {
          background: none;
          border: none;
        }

        &:before {
          background-color: #fff;
          border-radius: 50%;
          height: 50px;
          top: -21px !important;
          opacity: 1;
          -moz-transform: scale(0);
          -o-transform: scale(0);
          -ms-transform: scale(0);
          -webkit-transform: scale(0);
          transform: scale(0);
          width: 50px;
        }
        &:before,
        &:after {
          content: '';
          margin: 0 auto;
          position: absolute;
          right: 0;
          left: 0;
        }

        &:after {
          background: #fff none repeat scroll 0 0;
          border: 3px solid #fff;
          border-radius: 50%;
          height: 12px;
          width: 12px;
          -moz-transition: all 0.1s ease-out 0s;
          -o-transition: all 0.1s ease-out 0s;
          -webkit-transition: all 0.1s ease-out 0s;
          transition: all 0.1s ease-out 0s;
        }
      }

      &:hover {
        a {
          &:after {
            background: transparent none repeat scroll 0 0;
            border-width: 3px;
            height: 15px;
            width: 15px;
          }
        }
        span {
          &.show {
            left: 50px;
            opacity: 1;
            color: #fff;
            font-weight: 700;
          }
        }
      }

      a[aria-current='page'] {
        &:before {
          opacity: 0;
          -moz-transform: scale(1);
          -o-transform: scale(1);
          -ms-transform: scale(1);
          -webkit-transform: scale(1);
          transform: scale(1);
          -moz-transition: all 0.5s ease-out 0s;
          -o-transition: all 0.5s ease-out 0s;
          -webkit-transition: all 0.5s ease-out 0s;
          transition: all 0.5s ease-out 0s;
        }

        &:after {
          background: transparent none repeat scroll 0 0;
          border-width: 2px;
          height: 15px;
          width: 15px;
        }

        span {
          &.show {
            left: 50px;
            opacity: 1;
            color: #fff;
            font-weight: 700;
          }
        }
      }
    }
  }
`;

export { NavStyle, NavCollapse };
