import {Box, Checkbox, Container} from '@mui/material'
import styles from './styles.module.scss'
import {AddOns} from '../types'
import {useState} from 'react'

interface Props {
  option: AddOns
  isChecked: boolean
  handleOnChange: (option: AddOns) => void
}

export default function CheckCard({option, isChecked, handleOnChange}: Props) {
  const [isSelected, setIsSelected] = useState(isChecked)
  const handleChange = () => {
    handleOnChange(option)
    setIsSelected(val => !val)
  }
  return (
    <Container
      className={`${styles['container']} ${
        isSelected && styles['is-selected']
      }`}
      onClick={() => handleOnChange(option)}
    >
      <Checkbox
        className={styles['checkbox']}
        onChange={handleChange}
        checked={isChecked}
        data-testid={`${option.name.replace(/\s/g, '')}-check`}
      />
      <Box className={styles['title-container']}>
        <h3 className={styles['name']}>{option.name}</h3>
        <span className={styles['description']}>{option.description}</span>
      </Box>
      <span className={styles['price']}>{`+$${option.price}/mo`}</span>
    </Container>
  )
}
