import { User } from '../../../types/user'

export default function generateUsers(
  length: number = 10,
  min: number = 1,
  max: number = 100000
): User[] {
  return Array.from({ length }, () => ({
    id: Math.floor(Math.random() * (max - min + 1)) + min,
    name: 'Thomas',
    surname: 'Wallace',
    age: 30,
  }))
}
