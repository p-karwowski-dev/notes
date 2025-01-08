import { User } from '../../../types/user'
import { RefObject } from 'react'

interface UserObjectProps {
  elemRef: RefObject<HTMLDivElement> | ((node: HTMLDivElement) => void)
  users: User[]
}

export default function UserList({ elemRef, users }: UserObjectProps) {
  return (
    <div className="w-full h-[300px] rounded-xl m-auto overflow-scroll relative flex justify-center">
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
