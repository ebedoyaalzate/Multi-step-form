import {render, screen} from '@testing-library/react'
import Stepper from '../../components/Stepper/index'
import '@testing-library/jest-dom'
import {STEPS} from '../mocks/stepper'

const mockPush = jest.fn()
jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    push: mockPush,
  })),
}))

describe('Stepper', () => {
  beforeEach(() => {
    render(
      <Stepper activeStep={0} steps={STEPS}>
        <span>Test</span>
      </Stepper>,
    )
  })
  it('renders a heading', () => {
    const stepper = screen.getByRole('heading', {name: 'STEPPER TEST 1'})

    expect(stepper).toBeInTheDocument()
  })

  it('should be active first step', () => {
    const stepper = screen.getByTestId('step-label-1')

    expect(stepper?.firstElementChild?.classList.contains('Mui-active')).toBe(
      true,
    )
  })

  it('should be disabled second step', () => {
    const stepper = screen.getByTestId('step-label-2')

    expect(stepper?.firstElementChild?.classList.contains('Mui-active')).toBe(
      false,
    )
    expect(stepper?.firstElementChild?.classList.contains('Mui-disabled')).toBe(
      true,
    )
  })
})
