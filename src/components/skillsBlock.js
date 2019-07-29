import React from 'react';
import { BlockSkills, SpanProgress, BarWrap } from './skillsBlock.style';

const SkillsBlock = ({ data }) => (
  <div style={{ marginTop: `40px` }}>
    {data.map((elem, i) => {
      return (
        <BlockSkills key={i}>
          <SpanProgress>{elem.label}</SpanProgress>
          <BarWrap>
            <span
              id={i}
              data-width={elem.percent}
              style={{ width: `${elem.percent}%` }}
            >
              <strong style={{ opacity: 1 }}>
                <i>{elem.percent}</i>%
              </strong>
            </span>
          </BarWrap>
        </BlockSkills>
      );
    })}
  </div>
);

export default SkillsBlock;
