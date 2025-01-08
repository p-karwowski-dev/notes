import Card from '../../../components/Card'
import CodeBox from '../../../components/CodeBox'
import Layout from '../../../components/Layout'
import Issue from './Issue'
import Solution from './Solution'
import { issueCode, SolutionCode } from './code'

export default function TopicScrolling() {
  return (
    <Layout>
      <h1 className="font-bold text-gray-900 text-2xl mb-4">
        Scrolling - performance issue due to wrong component structure.
      </h1>

      <section className="flex flex-col gap-4">
        <Card color="red">
          Issue (left column): The element on the left hand side doesn't scroll
          smoothly. Scroll detection and state update happen on the top level
          component. Scrolling triggers state update on top level which cause
          rerender all components on this level, including SlowComponent.
        </Card>

        <Card color="green">
          Solution (right column): Moving scroll detection and state update down
          to separate wrapping element encapsulates logic and triggers update
          only in a wrapper. This means that all elements on the top level will
          not be rerendered, so will keep the same object references and can be
          safely passed to the wrapper as props - in this case as children.
          React uses shallow props comparison to define if an update should be
          passed to the lover level. We passed only the same children's
          references so all props are the same, and the update life cycle stops
          at wrapper component.
        </Card>

        <div className="flex justify-between">
          <Issue />
          <Solution />
        </div>

        <CodeBox text="Code with issue...">{issueCode}</CodeBox>
        <CodeBox text="Code with solution...">{SolutionCode}</CodeBox>
      </section>
    </Layout>
  )
}
