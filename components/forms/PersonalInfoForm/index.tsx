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
    formState: {errors},
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
        register={register}
        errors={errors}
        rules={{
          required: 'This field is required',
        }}
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
        register={register}
        errors={errors}
      />
      <Input
        label="Phone Number"
        type="text"
        placeholder="+1 234 567 890"
        name="phone"
        register={register}
        errors={errors}
        rules={{
          required: 'This field is required',
          pattern: {
            value: PHONE_REGEX,
            message: 'This is not an Email',
          },
        }}
      />
      <Box className={styles['buttons-container']}>
        <Button variant="contained" type="submit" size="medium">
          Next Step
        </Button>
      </Box>
    </form>
  )
}

export default PersonalInfoForm
