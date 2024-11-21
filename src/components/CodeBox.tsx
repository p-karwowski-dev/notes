import { useState } from 'react'

export default function CodeBox({
  children,
  text,
}: {
  children: string
  text: string
}) {
  const [isOpen, toggle] = useState(false)

  return (
    <pre
      className="bg-gray-900 text-white rounded-2xl pb-6 px-6 overflow-auto cursor-pointer"
      onClick={() => {
        toggle(!isOpen)
      }}
    >
      <code className="text-xs">{isOpen ? children : text}</code>
    </pre>
  )
}
