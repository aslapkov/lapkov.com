import React from 'react';
import { BlockDiv } from './iconBlock.style';

const IconBlock = ({ data }) => (
  <React.Fragment>
    {data.map((elem, i) => {
      const IconName = elem.iconName;

      return (
        <BlockDiv key={i}>
          <IconName
            height="100"
            width="100"
            className="iconStyle"
            fill="#777"
          />
          <span className="lab">{elem.label}</span>
        </BlockDiv>
      );
    })}
  </React.Fragment>
);

export default IconBlock;