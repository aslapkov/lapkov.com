import React, { useState, useEffect, useRef, createRef } from 'react';
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

  useEffect(() => {
    const nextHeights = elemRefs.current.map(ref => ref.current.clientHeight);
    setHeight(nextHeights);
  }, []);

  return (
    <React.Fragment>
      {data.map((elem, i) => {
        const activeFirst = i === 0 && `active`;

        return (
          <TimelineWrap
            key={i}
            ref={elemRefs.current[i]}
            style={{ height: `${height[i]}px` }}
            className={activeFirst}
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
                <p className="psmall">{elem.info}</p>
              </ColSm9>
            </Col10>
          </TimelineWrap>
        );
      })}
    </React.Fragment>
  );
};

export default ExperienceBlock;
