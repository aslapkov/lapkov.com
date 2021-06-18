import withLittleStateMachine from "./with-little-state-machine"

export const wrapRootElement = withLittleStateMachine

export const onServiceWorkerUpdateReady = () => {
  window.location.reload()
}
