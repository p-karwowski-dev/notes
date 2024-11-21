import Issue from './Issue'

export const issueCode = `
const FloatingBox = ({ top }: { top: number }) => (
  <div className="absolute left-10 w-12 h-6 bg-black" style={{ top }}>
    <p className="text-white">{top}</p>
  </div>
)

export default function Issue() {
  const [top, scroll] = useState<number>(100)

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    scroll(target.scrollTop + 100)
  }

  return (
    <div
      className="w-[400px] h-[300px] bg-cyan-200 rounded-xl m-auto overflow-scroll relative"
      onScroll={handleScroll}
    >
      <FloatingBox top={top} />
      <div className="w-[200px] h-[1200px]" />
      <SlowComponent />
    </div>
  )
}
`

export const SolutionCode = `
const FloatingBox = ({ top }: { top: number }) => (
  <div className="absolute left-10 w-12 h-6 bg-black" style={{ top }}>
    <p className="text-white">{top}</p>
  </div>
)

const ScrollBoxWithChildren = ({ children }: { children: ReactElement[] }) => {
  const [top, scroll] = useState<number>(100)

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    scroll(target.scrollTop + 100)
  }

  return (
    <div
      className="w-[400px] h-[300px] bg-cyan-200 rounded-xl m-auto overflow-scroll relative"
      onScroll={handleScroll}
    >
      <FloatingBox top={top} />
      {children}
    </div>
  )
}

export default function Solution() {
  return (
    <ScrollBoxWithChildren>
      <div className="w-[200px] h-[1200px]" />
      <SlowComponent />
    </ScrollBoxWithChildren>
  )
}
`
