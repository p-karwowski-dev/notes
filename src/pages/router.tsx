import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import NotFound from './ErrorPage'
import Sidebar from './Sidebar'
import TopicScrolling from './topics/scrolling'
import LoadingOnScrollingObserver from './topics/LoadingOnScrollingObserver'

export const listOfTopics = [
  { path: 'scrolling-performance-issue', name: 'Scrolling performance issue' },
  {
    path: 'loading-on-scrolling-intersection-observer',
    name: 'Loading on scrolling',
  },
]

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Sidebar />,
    errorElement: <NotFound />,
    children: [{ path: '/', element: <Home /> }],
  },
  {
    path: '/topic',
    element: <Sidebar />,
    children: [
      { path: listOfTopics[0].path, element: <TopicScrolling /> },
      { path: listOfTopics[1].path, element: <LoadingOnScrollingObserver /> },
      { path: '/topic/:path', element: <Home /> },
    ],
  },
])
