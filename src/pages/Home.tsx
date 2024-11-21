import { codeExample1 } from '../components/codeExamples'
import CodeBox from '../components/CodeBox'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
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

      <CodeBox text="Code example">{codeExample1}</CodeBox>
    </Layout>
  )
}
