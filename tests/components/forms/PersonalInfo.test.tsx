import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import PersonalInfo from '../../../components/pages/forms/PersonalInfoForm'
import '@testing-library/jest-dom'
import {personalInfoMock} from '@/tests/mocks/forms'
import {STEPS} from '@/components/Stepper/constants'
import {act} from 'react-dom/test-utils'

const mockPush = jest.fn()
jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    push: mockPush,
  })),
}))

const ACTIVE_STEP = 0

const setUp = () => {
  const {container} = render(<PersonalInfo activeStep={ACTIVE_STEP} />)
  const nameInput = screen.getByTestId('name-input')
  const emailInput = screen.getByTestId('email-input')
  const phoneInput = screen.getByTestId('phone-input')
  const submitButton = screen.getByTestId('submit')
  const form = screen.getByTestId('form')

  return {nameInput, emailInput, phoneInput, submitButton, form, container}
}

describe('PersonalInfo form', () => {
  it('Should be enabled submit button', async () => {
    const {nameInput, emailInput, phoneInput, submitButton} = setUp()
    fireEvent.change(nameInput, {target: {value: personalInfoMock.name}})
    fireEvent.change(emailInput, {target: {value: personalInfoMock.email}})
    fireEvent.change(phoneInput, {target: {value: personalInfoMock.phone}})
    await waitFor(() => {
      expect(submitButton).not.toBeDisabled()
    })
  })

  it('Should be disabled submit button when missing a value', async () => {
    const {nameInput, emailInput, submitButton} = setUp()
    fireEvent.change(nameInput, {target: {value: personalInfoMock.name}})
    fireEvent.change(emailInput, {target: {value: personalInfoMock.email}})
    await waitFor(() => {
      expect(submitButton).toBeDisabled()
    })
  })

  it('Should be an error text with bad email', async () => {
    const {emailInput} = setUp()
    fireEvent.change(emailInput, {target: {value: 'bad email'}})
    await waitFor(() => {
      const errorText = screen.getByText('This is not an Email')
      expect(errorText).toBeInTheDocument()
    })
  })

  it('Should not be an error text with good email', async () => {
    const {emailInput, container} = setUp()
    fireEvent.change(emailInput, {target: {value: personalInfoMock.email}})
    await waitFor(() => {
      const errorText = container.querySelector('error-message')

      expect(errorText).not.toBeInTheDocument()
    })
  })

  it('Should redirect to plan page when form is submited', async () => {
    const {nameInput, emailInput, phoneInput, form} = setUp()
    fireEvent.change(nameInput, {target: {value: personalInfoMock.name}})
    fireEvent.change(emailInput, {target: {value: personalInfoMock.email}})
    fireEvent.change(phoneInput, {target: {value: personalInfoMock.phone}})

    await act(() => {
      fireEvent.submit(form)
    })
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalled()
      expect(mockPush).toHaveBeenCalledWith(STEPS[ACTIVE_STEP + 1].path)
    })
  })
})
