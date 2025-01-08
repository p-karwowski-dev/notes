import Card from '../../../components/Card'
import CodeBox from '../../../components/CodeBox'
import Layout from '../../../components/Layout'
import SolutionA from './SolutionA'
import SolutionB from './SolutionB'
import { solutionCodeA, solutionCodeB } from './code'

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
          Solution: sequential rendering by loading more elements to the list
          whenever the last element is in the viewport. The most optimal
          solution would be to implement pagination on the endpoint and request
          additional data each time an event is triggered.
        </Card>

        <Card color="green">
          Option A: intersectionObserver and element reference as useCallback.
          UseCallback method receives the node as a parameter and logic is
          triggered whenever a reference is changed.
          <div className="flex justify-between">
            <SolutionA />
          </div>
          <CodeBox text="Code with solution...">{solutionCodeA}</CodeBox>
        </Card>

        <Card color="green">
          Option B: intersectionObserver, element reference and useEffect. Last
          element's reference is saved and logic is handled in useEffect.
          <div className="flex justify-between">
            <SolutionB />
          </div>
          <CodeBox text="Code with solution...">{solutionCodeB}</CodeBox>
        </Card>
      </section>
    </Layout>
  )
}
