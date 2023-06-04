import styles from './styles.module.scss'
import Input from '@/components/Input'
import {useForm} from 'react-hook-form'
import {PersonalForm} from './types'
import {EMAIL_REGEX, PHONE_REGEX} from '@/utils/regex'
import {Box, Button} from '@mui/material'
import {useContext} from 'react'
import {FormContext} from '@/context'
import {useRouter} from 'next/router'
import {STEPS} from '@/components/Stepper/constants'

interface Props {
  activeStep: number
}

function PersonalInfoForm({activeStep}: Props) {
  const {
    handleSubmit,
    formState: {isValid},
    control,
  } = useForm<PersonalForm>({mode: 'all'})
  const {push} = useRouter()

  const {personalInfo, setPersonalInfo} = useContext(FormContext)

  const handleOnSubmit = (data: PersonalForm) => {
    setPersonalInfo && setPersonalInfo(data)
    push(STEPS[activeStep + 1].path)
  }

  return (
    <form
      className={styles['container']}
      onSubmit={handleSubmit(data => handleOnSubmit(data))}
      data-testid="form"
    >
      <Input
        label="Name"
        type="text"
        placeholder="Esteban Bedoya"
        name="name"
        control={control}
        rules={{
          required: 'This field is required',
        }}
        defaultValue={personalInfo.name}
      />
      <Input
        label="Email Address"
        type="email"
        placeholder="esteban@correo.com"
        name="email"
        rules={{
          required: 'This field is required',
          pattern: {
            value: EMAIL_REGEX,
            message: 'This is not an Email',
          },
        }}
        control={control}
        defaultValue={personalInfo.email}
      />
      <Input
        label="Phone Number"
        type="text"
        placeholder="+1 234 567 890"
        name="phone"
        control={control}
        rules={{
          required: 'This field is required',
          pattern: {
            value: PHONE_REGEX,
            message: 'This is not a valid phone number',
          },
        }}
        defaultValue={personalInfo.phone}
      />
      <Box className={styles['buttons-container']}>
        <Button
          variant="contained"
          type="submit"
          size="medium"
          disabled={!isValid}
          data-testid="submit"
        >
          Next Step
        </Button>
      </Box>
    </form>
  )
}

export default PersonalInfoForm
