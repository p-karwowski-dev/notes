import { cn } from '../utils/cn'

type TColor = 'green' | 'red'

type CardProps = {
  children: any
  color: TColor
}

export default function Card({ children, color }: CardProps) {
  return (
    <div
      className={cn(
        `p-4 rounded-lg ${color === 'green' ? 'bg-green-100' : 'bg-red-100'}`
      )}
    >
      {children}
    </div>
  )
}
