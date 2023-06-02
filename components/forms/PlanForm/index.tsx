import {Box, Button, Container, Switch} from '@mui/material'
import SelectCard from './components/SelectCard'
import styles from './styles.module.scss'
import {CARDS_OPTIONS} from './constants'
import {useState} from 'react'
import {CardOptions} from './types'

export default function PlanForm() {
  const [plan, setPlan] = useState<CardOptions>()
  const [isMonthly, setIsMonthly] = useState(true)

  const handlePlan = (option: CardOptions) => {
    setPlan(option)
  }

  const handleSwitch = () => {
    setIsMonthly(val => !val)
  }
  return (
    <Container className={styles['container']}>
      <Box className={styles['cards-container']}>
        {CARDS_OPTIONS.map(option => (
          <SelectCard
            option={option}
            handleOnClick={handlePlan}
            isSelected={option === plan}
            key={option.name}
          />
        ))}
      </Box>
      <Box className={styles['switch']}>
        <span
          className={`${styles['span']} ${isMonthly && styles['is-selected']}`}
        >
          Monthly
        </span>
        <Switch color="primary" onChange={handleSwitch} />
        <span
          className={`${styles['span']} ${!isMonthly && styles['is-selected']}`}
        >
          Yearly
        </span>
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
          disabled={!plan}
        >
          Next Step
        </Button>
      </Box>
    </Container>
  )
}
