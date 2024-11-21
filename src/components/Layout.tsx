import { ReactElement } from 'react'

export default function Layout({ children }: { children: ReactElement[] }) {
  return <div className="ml-[22rem] p-8 flex flex-col w-full">{children}</div>
}
