import React, { Fragment } from 'react';
import { BlockRow, BlockDiv } from './iconBlock.style';

const IconBlock = ({ data }) => (
  <BlockRow>
    {data.map((elem, i) => {
      const IconName = elem.iconName;

      return (
        <Fragment key={i}>
          <BlockDiv>
            <IconName
              height="100"
              width="100"
              className="iconStyle"
              fill="#777"
            />
            <span className="lab">{elem.label}</span>
          </BlockDiv>
          {i % 2 !== 0 && <div className="w100"></div>}
        </Fragment>
      );
    })}
  </BlockRow>
);

export default IconBlock;
