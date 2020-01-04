import React, { Fragment, createRef, useState, useEffect, useRef } from 'react';
import {
  TimelineWrap,
  Col2,
  Col10,
  ColSm3,
  ColSm9,
} from './experienceBlock.style';

const ExperienceBlock = ({ data }) => {
  const [height, setHeight] = useState([]);
  const elemRefs = useRef(data.map(() => createRef()));
  const [hover, setHover] = useState([]);

  useEffect(() => {
    const nextHeights = elemRefs.current.map(ref => ref.current.clientHeight);
    setHeight(nextHeights);
  }, []);

  const handleMouseOver = event => {
    const hoverNode = elemRefs.current.map(ref => ref.current);
    const arrResults = [];

    for (let i = 0; i < hoverNode.length; i++) {
      event.target !== hoverNode[i]
        ? (arrResults[i] = false)
        : (arrResults[i] = true);
    }

    setHover(arrResults);
  };

  const handleMouseOut = () => setHover([]);

  useEffect(() => {
    const hoverNode = elemRefs.current.map(ref => ref.current);

    for (let i = 0; i < hoverNode.length; i++) {
      hoverNode[i].addEventListener('mouseenter', handleMouseOver);
      hoverNode[i].addEventListener('mouseleave', handleMouseOut);
    }

    return () => {
      for (let i = 0; i < hoverNode.length; i++) {
        hoverNode[i].removeEventListener('mouseenter', handleMouseOver);
        hoverNode[i].removeEventListener('mouseleave', handleMouseOut);
      }
    };
  }, []);

  return (
    <Fragment>
      {data.map((elem, i) => {
        let activeFirst =
          (i === 0 && hover.length === 0) || hover[i] ? `active` : `inactive`;
        let activeHover = hover[i] ? `active` : `inactive`;
        let activeClass = i !== 0 ? activeHover : activeFirst;

        return (
          <TimelineWrap
            key={i}
            ref={elemRefs.current[i]}
            style={{ height: `${height[i]}px` }}
            className={activeClass}
          >
            <Col2>
              <div
                className="linest"
                style={{ height: `${height[i] - 15}px` }}
              />
            </Col2>
            <Col10>
              <ColSm3>
                <span>{elem.period}</span>
              </ColSm3>
              <ColSm9>
                <span className="desc">{elem.position}</span>
                <span className="loc">{elem.loc}</span>
                {elem.site ? (
                  <span className="site">
                    {' '}
                    – {` `}
                    <a href={elem.site} rel="nofollow">
                      {elem.site}
                    </a>
                  </span>
                ) : (
                  ``
                )}
                <p className="psmall">{elem.info}</p>
              </ColSm9>
            </Col10>
          </TimelineWrap>
        );
      })}
    </Fragment>
  );
};

export default ExperienceBlock;
