import { useCallback, useEffect, useRef, useState } from 'react'
import { User } from '../../../types/user'
import generateUsers from './generateUsers'
import UserList from './UserList'

export default function SolutionA() {
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

  return <UserList users={users} elemRef={elemRef} />
}
