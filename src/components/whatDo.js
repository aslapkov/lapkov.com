import React from 'react';
import { BlockDiv } from './whatDo.style';

const WhatDo = ({ iconName, label }) => {
  const IconName = iconName;

  return (
    <BlockDiv>
      <IconName height="120" width="120" className="iconStyle" fill="#777" />
      <span className="lab">{label}</span>
    </BlockDiv>
  );
};

export default WhatDo;
