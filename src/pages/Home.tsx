import { CodeBox } from '../components/CodeBox'
import { codeExample1 } from '../components/codeExamples'

export default function Home() {
  return (
    <div className="m-8 flex flex-col w-full">
      <h1 className="font-bold text-gray-900 text-2xl mb-4">
        Developer's notes
      </h1>

      <section className="gap-4 flex flex-col">
        <p className="text-lg">
          This repository is a collection of technical quirks and challenges in
          react-based applications. Sometimes issues can be resolved with simple
          solutions and this repository was created with intension of providing
          these solutions.
        </p>
      </section>

      <section className="flex flex-col flex-1 justify-center items-center">
        <img alt="react-icon" width="300px" height="300px" src="/logo512.png" />
      </section>

      <CodeBox>{codeExample1}</CodeBox>
    </div>
  )
}
