export default function SlowComponent({ delay = 100 }: { delay?: number }) {
  const compute = () => {
    const start = Date.now()
    while (Date.now() - start < delay) {}
    return 'Finished!'
  }

  const result = compute()

  return (
    <div>
      <p className="hidden">{result}</p>
    </div>
  )
}
