import { NavLink, Outlet } from 'react-router-dom'
import { listOfTopics } from './router'
import { useCallback, useState } from 'react'

export default function Sidebar() {
  const [topics, setTopics] = useState(listOfTopics)

  const useFilter = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setTopics(
      listOfTopics.filter((topic) => topic.path.includes(e.target.value))
    )
  }, [])

  return (
    <>
      <aside id="sidebar">
        <h1>Developer's notes</h1>
        <div>
          <form id="search-form" role="search">
            <input
              onChange={useFilter}
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
        </div>
        <nav>
          <ul>
            {topics.map(({ path, name }) => (
              <li key={path}>
                <NavLink
                  to={`/topic/${path}`}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div id="detail"></div>
      </aside>
      <Outlet />
    </>
  )
}
