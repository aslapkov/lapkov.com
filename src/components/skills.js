import * as React from "react"
import TypedReact from "./typed-react"
import * as styles from "./skills.module.css"

const Skills = ({ dataSkills }) => (
  <>
    <h1>
        <span style={{ display: `none` }}>{dataSkills.titleSpan}</span>
        <TypedReact strings={[`${dataSkills.title}`]} />
      </h1>
      <h2>{dataSkills.h2}</h2>
      <p>{dataSkills.p}</p>
    <div className={styles.skills}>
      {dataSkills.skills.map((elem, i) => {
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
  </>
)

export default Skills
