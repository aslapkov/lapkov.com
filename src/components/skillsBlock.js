import React from 'react';
import { BlockSkills, SpanProgress, BarWrap } from './skillsBlock.style';
import { Row } from './layout.style';

const SkillsBlock = ({ data }) => {
  return (
    <Row style={{ marginTop: `40px` }}>
      {data.map((elem, i) => {
        return (
          <BlockSkills key={i}>
            <SpanProgress>{elem.label}</SpanProgress>
            <BarWrap>
              <span
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
    </Row>
  );
};

export default SkillsBlock;
