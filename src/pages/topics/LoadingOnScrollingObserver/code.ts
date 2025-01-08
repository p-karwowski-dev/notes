export const SolutionCode = `
import { useCallback, useEffect, useRef, useState } from 'react'
import { User } from '../../../types/user'
import generateUsers from './generateUsers'

export default function Solution() {
  const [users, setUsers] = useState<User[]>([])
  const observerRef = useRef<IntersectionObserver>()

  useEffect(() => {
    setUsers(generateUsers(5))
  }, [])

  const elemRef = useCallback(
    (node: HTMLDivElement) => {
      if (node === null) return
      if (observerRef?.current) observerRef.current.disconnect()
      observerRef.current = new IntersectionObserver((entires) => {
        if (entires[0].isIntersecting) {
          setUsers([...users, ...generateUsers(5)])
        }
      })
      observerRef.current.observe(node)
    },
    [users]
  )

  return (
    <div className="w-full h-[300px] bg-cyan-200 rounded-xl m-auto overflow-scroll relative">
      <div className="w-[200px] h-auto">
        {users &&
          users.map(({ id, name, surname, age }, index) => (
            <div
              ref={elemRef}
              key={id}
              className="flex flex-col h-auto p-8 bg-yellow-700 rounded-xl m-4"
            >
              <p>Index: {index}</p>
              <p>Id: {id}</p>
              <p>{name}</p>
              <p>{surname}</p>
              <p>{age}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

`
