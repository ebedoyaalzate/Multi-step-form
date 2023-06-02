import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import PersonalInfo from '../../../components/pages/forms/PersonalInfoForm'
import '@testing-library/jest-dom'
import {personalInfoMock} from '@/tests/mocks/forms'

const mockPush = jest.fn()
jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    push: mockPush,
  })),
}))

const setUp = () => {
  const {container} = render(<PersonalInfo activeStep={0} />)
  const nameInput = screen.getByTestId('name-input')
  const emailInput = screen.getByTestId('email-input')
  const phoneInput = screen.getByTestId('phone-input')
  const submitButton = screen.getByTestId('submit')

  return {nameInput, emailInput, phoneInput, submitButton, container}
}

describe('Home', () => {
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
})
