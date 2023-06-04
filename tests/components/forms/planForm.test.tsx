import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import PlanForm from '../../../components/pages/forms/PlanForm'
import '@testing-library/jest-dom'
import {initialMockState} from '@/tests/mocks/state'
import React from 'react'
import {act} from 'react-dom/test-utils'
import {FormContext} from '@/context'
import {CARDS_OPTIONS} from '@/components/pages/forms/PlanForm/constants'
import {STEPS} from '@/components/Stepper/constants'

const mockPush = jest.fn()
jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    push: mockPush,
  })),
}))

const setPlanMock = jest.fn()

const ACTIVE_STEP = 1

const setUp = () => {
  const {container} = render(
    <FormContext.Provider
      value={{...initialMockState, setPlanInfo: setPlanMock}}
    >
      <PlanForm activeStep={ACTIVE_STEP} />
    </FormContext.Provider>,
  )

  const arcadeCard = screen.getByTestId('Arcade-card')
  const advanceCard = screen.getByTestId('Advance-card')
  const proCard = screen.getByTestId('Pro-card')
  const switchIsMonthly = screen.getByRole('checkbox')
  const submitButton = screen.getByTestId('submit')
  const backButton = screen.getByTestId('back-btn')

  return {
    arcadeCard,
    advanceCard,
    proCard,
    switchIsMonthly,
    submitButton,
    backButton,
    container,
  }
}

describe('Plan form', () => {
  it('Should be enabled submit button when select a card', async () => {
    const {arcadeCard, submitButton} = setUp()
    await act(() => {
      fireEvent.click(arcadeCard)
    })
    await waitFor(() => {
      expect(submitButton).not.toBeDisabled()
    })
  })

  it('Should be disabled submit button when no card is selected', async () => {
    const {submitButton} = setUp()
    await waitFor(() => {
      expect(submitButton).toBeDisabled()
    })
  })

  it('Should set context with the correct data', async () => {
    const {proCard, submitButton} = setUp()
    await act(() => {
      fireEvent.click(proCard)
    })

    await act(() => {
      fireEvent.click(submitButton)
    })
    await waitFor(() => {
      expect(setPlanMock).toHaveBeenCalled()
      expect(setPlanMock).toHaveBeenCalledWith({
        option: CARDS_OPTIONS[2],
        isMonthly: true,
      })
    })
  })

  it('Should set context with the correct data when switch is monthly', async () => {
    const {advanceCard, switchIsMonthly, submitButton} = setUp()
    await act(() => {
      fireEvent.click(advanceCard)
    })

    await act(() => {
      fireEvent.click(switchIsMonthly)
    })

    await act(() => {
      fireEvent.click(submitButton)
    })
    await waitFor(() => {
      expect(setPlanMock).toHaveBeenCalled()
      expect(setPlanMock).toHaveBeenCalledWith({
        option: CARDS_OPTIONS[1],
        isMonthly: false,
      })
    })
  })

  it('Should redirect to add ons page when form is submit', async () => {
    const {proCard, submitButton} = setUp()
    await act(() => {
      fireEvent.click(proCard)
    })

    await act(() => {
      fireEvent.click(submitButton)
    })
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalled()
      expect(mockPush).toHaveBeenCalledWith(STEPS[ACTIVE_STEP + 1].path)
    })
  })

  it('Should return to personal info page when return previus step', async () => {
    const {backButton} = setUp()
    await act(() => {
      fireEvent.click(backButton)
    })
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalled()
      expect(mockPush).toHaveBeenCalledWith(STEPS[ACTIVE_STEP - 1].path)
    })
  })
})
