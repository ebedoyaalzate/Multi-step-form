import {Box, Checkbox, Container} from '@mui/material'
import styles from './styles.module.scss'
import {AddOns} from '../types'
import {useState} from 'react'

interface Props {
  option: AddOns
  handleOnChange: (option: AddOns) => void
}

export default function CheckCard({option, handleOnChange}: Props) {
  const [isSelected, setIsSelected] = useState(false)
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
      <Checkbox className={styles['checkbox']} onChange={handleChange} />
      <Box className={styles['title-container']}>
        <h3 className={styles['name']}>{option.name}</h3>
        <span className={styles['description']}>{option.description}</span>
      </Box>
      <span className={styles['price']}>{`+$${option.price}/mo`}</span>
    </Container>
  )
}
