import React from 'react';
import { BlockWorks, DivWorks, Col2, Col3, Col5 } from './worksBlock.style';

const WorksBlock = ({ data }) => {
  return (
    <BlockWorks>
      {data.map((elem, i) => {
        const first = i === 0 && `first`;

        return (
          <DivWorks key={i} className={first}>
            <Col2>
              <span className="count">
                <span>{i + 1}</span>
              </span>
            </Col2>
            <Col2>
              <span className="year">{elem.year}</span>
            </Col2>
            <Col5>
              <span>{elem.desc}</span>
            </Col5>
            <Col3>
              <span>
                <a
                  href={elem.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {elem.site}
                </a>
              </span>
            </Col3>
          </DivWorks>
        );
      })}
    </BlockWorks>
  );
};

export default WorksBlock;
