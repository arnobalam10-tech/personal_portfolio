// Width that keeps a frame of the given aspect ratio no taller than the visible screen.
export function fitWidth(ratio, heightVh = 72) {
  const n = typeof ratio === 'number'
    ? ratio
    : String(ratio).split('/').map(Number).reduce((a, b) => a / b);
  return `min(100%, calc(${heightVh}svh * ${n}))`;
}
