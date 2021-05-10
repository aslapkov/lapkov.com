import * as React from "react"
import * as styles from "./IconBlock.module.css"

const IconBlock = ({ data }) => (
  <div className={styles.blockRow}>
    {data.map((elem, i) => {
      const IconName = elem.iconName

      return (
        <React.Fragment key={i}>
          <div className={styles.blockDiv}>
            <IconName
              height="100"
              width="100"
              className={styles.iconStyle}
              fill="#777"
            />
            <span className={styles.lab}>{elem.label}</span>
          </div>
          {i % 2 !== 0 && <div className={styles.w100}></div>}
        </React.Fragment>
      )
    })}
  </div>
)

export default IconBlock
