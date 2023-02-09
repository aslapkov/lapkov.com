import * as React from "react"
import TypedReact from "./typed-react"
import ExperienceTimeline from "./experience-timeline"

const Experience = ({ dataExperience }) => (
  <>
    <h1>
      <span style={{ display: `none` }}>{dataExperience.titleSpan}</span>
      <TypedReact strings={[`${dataExperience.title}`]} />
    </h1>
    <h2>{dataExperience.h2}</h2>

    <ExperienceTimeline dataExperience={dataExperience.experience} />
  </>
)

export default Experience
