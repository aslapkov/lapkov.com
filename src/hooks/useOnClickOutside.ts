import * as React from "react"

export default function useOnClickOutside(
  ref: { current: { contains: (arg: any) => any } },
  handler: (arg: any) => void
) {
  React.useEffect(() => {
    const listener = (event: { target: any }) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler])
}
