import { render, screen } from '@testing-library/react'
import Home from './Home'

test('renders learn react link', () => {
  render(<Home />)
  const linkElement = screen.getByText(/Test/i)
  expect(linkElement).toBeInTheDocument()
})