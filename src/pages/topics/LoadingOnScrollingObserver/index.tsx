import Card from '../../../components/Card'
import CodeBox from '../../../components/CodeBox'
import Layout from '../../../components/Layout'
import Solution from './Solution'
import { SolutionCode } from './code'

export default function LoadingOnScrollingObserver() {
  return (
    <Layout>
      <h1 className="font-bold text-gray-900 text-2xl mb-4">
        Loading on scrolling using intersection observer
      </h1>

      <section className="flex flex-col gap-4">
        <Card color="red">
          Issue: The data set is too big to be rendered on the screen at once
          and have to be loaded in sequence to prevent UI from freezing or
          render being delayed.
        </Card>

        <Card color="green">
          We can implement sequential rendering adding more elements to the list
          whenever the last element is in the viewport. The most optimal
          solution would be to implement pagination on the endpoint and request
          additional data each time an event is triggered. This example
          simulates rendering data in sequence using intersectionObserver and
          element reference as useCallback. UseCallback method receives the node
          as a parameter and logic is triggered whenever a new reference is
          changed.
        </Card>

        <div className="flex justify-between">
          <Solution />
        </div>

        <CodeBox text="Code with solution...">{SolutionCode}</CodeBox>
      </section>
    </Layout>
  )
}
