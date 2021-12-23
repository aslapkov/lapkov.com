import * as React from "react"
import { createStore, StateMachineProvider } from "little-state-machine"
import language from "./src/state/language"

createStore({ language })

const stateMachine = ({ element }) => (
  <StateMachineProvider>{element}</StateMachineProvider>
)

export default stateMachine
