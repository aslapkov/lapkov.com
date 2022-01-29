import "@fontsource/nunito"
import "@fontsource/kalam"
import stateMachine from "./state-machine"

export const wrapRootElement = stateMachine

export const onServiceWorkerUpdateReady = () => {
  window.location.reload()
}
