import { useEffect, useRef, useState } from 'react'
import { User } from '../../../types/user'
import generateUsers from './generateUsers'
import UserList from './UserList'

export default function SolutionB() {
  const [users, setUsers] = useState<User[]>([])
  const elemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setUsers(generateUsers(5))
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entires) => {
      if (entires[0].isIntersecting) {
        setUsers([...users, ...generateUsers(5)])
      }
    })

    if (observer && elemRef.current) {
      observer.observe(elemRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [users])

  return <UserList users={users} elemRef={elemRef} />
}
