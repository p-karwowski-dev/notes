import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import NotFound from './ErrorPage'
import Sidebar from './Sidebar'
import TopicScrolling from '../topics/scrolling'

export const listOfTopics = [
  { path: 'scrolling-performance-issue', name: 'Scrolling performance issue' },
  { path: 'second-topic', name: 'Second Topic' },
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
      { path: '/topic/:path', element: <Home /> },
    ],
  },
])
