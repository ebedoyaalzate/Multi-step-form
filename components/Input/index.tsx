import {Box, Container} from '@mui/material'
import styles from './styles.module.scss'
import {
  RegisterOptions,
  useController,
} from 'react-hook-form'

type InputProps = {
  label: string
  placeholder: string
  name: string
  type: string
  rules?: RegisterOptions
  control: any
  defaultValue: any
}

function Input({name, rules, label, control, defaultValue, ...props}: InputProps) {
  const {
    field: {ref, ...rest},
    fieldState,
  } = useController({
    name,
    control,
    rules,
    defaultValue
  })

  const hasError = !!fieldState?.error?.message

  return (
    <Container className={styles['container']}>
      <Box className={styles['texts']}>
        <label className={styles['label']} htmlFor={name}>
          {label}
        </label>
        {hasError ? (
          <span className={styles['error-message']}>
            {fieldState?.error?.message}
          </span>
        ) : null}
      </Box>
      <input
        className={styles['input']}
        id={name}
        {...props}
        {...rest}
        ref={ref}
      />
    </Container>
  )
}

export default Input
