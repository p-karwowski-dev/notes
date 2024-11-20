export function CodeBox({ children }: { children: string }) {
  return (
    <pre className="bg-gray-900 text-white rounded-2xl pb-6 px-6 overflow-auto">
      <code>{children}</code>
    </pre>
  )
}
