import {Box, Button, Container} from '@mui/material'
import {ADD_ONS_OPTIONS} from './constants'
import CheckCard from './components/CheckCard'
import {useState} from 'react'
import {AddOns} from './types'
import styles from './styles.module.scss'

export default function AddOnsForm() {
  const [addOns, setAddOns] = useState<AddOns[]>([])

  const handleChange = (option: AddOns) => {
    const existAdd = addOns.some(add => add.name === option.name)
    const newAddons = existAdd
      ? addOns.filter(add => add.name !== option.name)
      : [...addOns, option]
    setAddOns(newAddons)
  }

  return (
    <Container className={styles['container']}>
      <Box className={styles['cards-container']}>
        {ADD_ONS_OPTIONS.map(option => (
          <CheckCard
            option={option}
            key={option.name}
            handleOnChange={handleChange}
          ></CheckCard>
        ))}
      </Box>
      <Box className={styles['buttons-container']}>
        <Button variant="text" size="medium" data-testid="back-btn">
          Go Back
        </Button>
        <Button
          variant="contained"
          type="submit"
          size="medium"
          data-testid="submit"
        >
          Next Step
        </Button>
      </Box>
    </Container>
  )
}
