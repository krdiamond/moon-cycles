export function increaseCounter(counter) {
  return {
    type: "INCREASE_COUNTER",
    payload: counter + 1
  }
}
