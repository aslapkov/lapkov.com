import * as React from "react"
import Typed from "typed.js"

const TypedReact = (props) => {
  const spanEl = React.useRef(null)

  const options = {
    strings: props.strings,
    typeSpeed: 40,
    backSpeed: 30,
  }

  React.useEffect(() => {
    const typed = new Typed(spanEl.current, options)

    return () => {
      // to prevent memory leaks
      typed.destroy()
    }
  })

  return <span style={{ whiteSpace: "pre" }} ref={spanEl} />
}

export default TypedReact
