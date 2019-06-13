import React from 'react';
import Typed from 'typed.js';

class TypedReact extends React.Component {
  componentDidMount() {
    const { strings } = this.props;
    // You can pass other options here
    const options = {
      strings: strings,
      typeSpeed: 40,
      backSpeed: 40,
    };

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <span
        style={{ whiteSpace: `pre` }}
        ref={el => {
          this.el = el;
        }}
      />
    );
  }
}

export default TypedReact;
