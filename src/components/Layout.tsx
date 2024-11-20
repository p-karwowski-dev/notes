import { ReactElement } from 'react'

export function Layout({ children }: { children: ReactElement[] }) {
  return <div className="m-8 flex flex-col w-full">{children}</div>
}
