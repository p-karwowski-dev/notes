import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import NotFound from './ErrorPage'
import Sidebar from './Sidebar'

export const listOfTopics = [
  { path: 'first-topic', name: 'First Topic' },
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
    children: [{ path: '/topic/:path', element: <Home /> }],
  },
])
