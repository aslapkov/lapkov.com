import * as React from "react"
import * as styles from "./icons.module.css"

const Icons = ({ data }) => (
  <div className={styles.blockRow}>
    {data.map((elem, i) => {
      const IconName = elem.iconName

      return (
        <div key={i}>
          <IconName
            className={styles.iconStyle}
            fill="#777"
          />
          <div className={styles.lab}>{elem.label}</div>
        </div>
      )
    })}
  </div>
)

export default Icons
