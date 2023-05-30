import {Box, Container} from '@mui/material'
import styles from './styles.module.scss'
import {FieldErrors, RegisterOptions} from 'react-hook-form'

type InputProps = {
  label: string
  placeholder: string
  name: string
  type: string
  register: any
  rules?: RegisterOptions
  errors?: FieldErrors
}

function Input({name, register, rules, errors, label, ...props}: InputProps) {
  console.log(errors?.[name])
  const messageError = errors?.[name]?.message?.toString()
  return (
    <Container className={styles['container']}>
      <Box className={styles['texts']}>
        <label className={styles['label']} htmlFor={name}>
          {label}
        </label>
        {errors?.[name] ? (
          <span className={styles['error-message']}>{messageError}</span>
        ) : null}
      </Box>
      <input
        className={styles['input']}
        id={name}
        {...props}
        {...(register && register(name, rules))}
        ref={null}
      />
    </Container>
  )
}

export default Input
