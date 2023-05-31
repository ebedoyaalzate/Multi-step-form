import styles from './styles.module.scss'
import Input from '@/components/Input'
import {useForm} from 'react-hook-form'
import {PersonalForm} from './types'
import {EMAIL_REGEX, PHONE_REGEX} from '@/utils/regex'
import {Box, Button} from '@mui/material'

function PersonalInfoForm() {
  const {
    register,
    handleSubmit,
    formState: {errors, isValid},
    control,
  } = useForm<PersonalForm>({mode: 'all'})

  return (
    <form
      className={styles['container']}
      onSubmit={handleSubmit(d => console.log(d))}
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
        defaultValue=""
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
        defaultValue=""
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
        defaultValue=""
      />
      <Box className={styles['buttons-container']}>
        <Button
          variant="contained"
          type="submit"
          size="medium"
          disabled={!isValid}
        >
          Next Step
        </Button>
      </Box>
    </form>
  )
}

export default PersonalInfoForm
