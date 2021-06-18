import * as React from "react"
import * as styles from "./ExperienceBlock.module.css"

const ExperienceBlock = ({ dataExperience }) => {
  const [height, setHeight] = React.useState([])
  const elemRefs = React.useRef(dataExperience.map(() => React.createRef()))
  const [hover, setHover] = React.useState([])

  React.useEffect(() => {
    const nextHeights = elemRefs.current.map((ref) => ref.current.clientHeight)
    setHeight(nextHeights)
  }, [])

  const handleMouseOver = (event) => {
    const hoverNode = elemRefs.current.map((ref) => ref.current)
    const arrResults = []

    for (let i = 0; i < hoverNode.length; i++) {
      event.target !== hoverNode[i]
        ? (arrResults[i] = false)
        : (arrResults[i] = true)
    }

    setHover(arrResults)
  }

  const handleMouseOut = () => setHover([])

  React.useEffect(() => {
    const hoverNode = elemRefs.current.map((ref) => ref.current)

    for (let i = 0; i < hoverNode.length; i++) {
      hoverNode[i].addEventListener("mouseenter", handleMouseOver)
      hoverNode[i].addEventListener("mouseleave", handleMouseOut)
    }

    return () => {
      for (let i = 0; i < hoverNode.length; i++) {
        hoverNode[i].removeEventListener("mouseenter", handleMouseOver)
        hoverNode[i].removeEventListener("mouseleave", handleMouseOut)
      }
    }
  }, [])

  return (
    <React.Fragment>
      {dataExperience.map((elem, i) => {
        let activeFirst =
          (i === 0 && hover.length === 0) || hover[i]
            ? styles.active
            : styles.inactive
        let activeHover = hover[i] ? styles.active : styles.inactive
        let activeClass = i !== 0 ? activeHover : activeFirst

        return (
          <div
            key={i}
            ref={elemRefs.current[i]}
            style={{ height: `${height[i]}px` }}
            className={`${styles.timelineWrap} ${activeClass}`}
          >
            <div className={styles.col2}>
              <div
                className={styles.linest}
                style={{ height: `${height[i] - 15}px` }}
              />
            </div>
            <div className={styles.col10}>
              <div className={styles.colSm3}>
                <span>{elem.period}</span>
              </div>
              <div className={styles.colSm9}>
                <span className={styles.desc}>{elem.position}</span>
                <span className={styles.loc}>{elem.loc}</span>
                {elem.site ? (
                  <span className={styles.site}>
                    <a href={elem.site} rel="nofollow">
                      {elem.site.slice(elem.site.includes("https") ? 8 : 7)}
                    </a>
                  </span>
                ) : (
                  ``
                )}
                <p className={styles.psmall}>{elem.info}</p>
              </div>
            </div>
          </div>
        )
      })}
    </React.Fragment>
  )
}

export default ExperienceBlock
