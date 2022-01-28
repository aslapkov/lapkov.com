import * as React from "react"
import * as styles from "./SkillsBlock.module.css"

const SkillsBlock = ({ dataSkills }) => (
  <div className={styles.skills}>
    {dataSkills.map((elem, i) => {
      return (
        <div className={styles.skill} key={i}>
          <span className={styles.progress}>{elem.label}</span>
          <div className={styles.barWrap}>
            <span
              data-width={elem.percent}
              style={{ width: `${elem.percent}%` }}
            >
              <strong style={{ opacity: 1 }}>
                <i>{elem.percent}</i>%
              </strong>
            </span>
          </div>
        </div>
      )
    })}
  </div>
)

export default SkillsBlock
