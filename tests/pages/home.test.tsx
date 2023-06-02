import {render, screen} from '@testing-library/react'
import Home from '../../pages/index'
import '@testing-library/jest-dom'

const mockPush = jest.fn()
jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    push: mockPush,
  })),
}))

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {name: 'Personal Info'})

    expect(heading).toBeInTheDocument()
  })
})
