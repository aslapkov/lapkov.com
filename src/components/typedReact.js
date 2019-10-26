import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const TypedReact = props => {
  const spanEl = useRef(null);
  // You can pass other options here
  const options = {
    strings: props.strings,
    typeSpeed: 40,
    backSpeed: 30,
  };

  useEffect(() => {
    const typed = new Typed(spanEl.current, options);

    return () => {
      // to prevent memory leaks
      typed.destroy();
    };
  });

  return <span style={{ whiteSpace: 'pre' }} ref={spanEl} />;
};

export default TypedReact;
