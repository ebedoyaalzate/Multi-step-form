import {render, screen} from '@testing-library/react'
import Plan from '../../pages/Plan'
import '@testing-library/jest-dom'

const mockPush = jest.fn()
jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    push: mockPush,
  })),
}))

describe('Home', () => {
  it('renders a heading', () => {
    render(<Plan />)

    const heading = screen.getByRole('heading', {name: 'Select your plan'})

    expect(heading).toBeInTheDocument()
  })
})
