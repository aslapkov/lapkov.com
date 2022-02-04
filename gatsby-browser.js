import stateMachine from "./state-machine"
import "./src/styles/global.css"

export const wrapRootElement = stateMachine

export const onServiceWorkerUpdateReady = () => {
  window.location.reload()
}
