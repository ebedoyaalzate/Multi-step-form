import {Box, Button, Container, Switch} from '@mui/material'
import SelectCard from './components/SelectCard'
import styles from './styles.module.scss'
import {CARDS_OPTIONS} from './constants'
import {useContext, useState} from 'react'
import {PlanOptions} from './types'
import {useRouter} from 'next/router'
import {STEPS} from '@/components/Stepper/constants'
import {FormContext} from '@/context'
interface Props {
  activeStep: number
}
export default function PlanForm({activeStep}: Props) {
  const {planInfo, setPlanInfo} = useContext(FormContext)
  const [plan, setPlan] = useState<PlanOptions>(planInfo.option)
  const [isMonthly, setIsMonthly] = useState(planInfo.isMonthly)
  const {push} = useRouter()

  const handlePlan = (option: PlanOptions) => {
    setPlan(option)
  }

  const handleSwitch = () => {
    setIsMonthly(val => !val)
  }

  const handleClick = () => {
    setPlanInfo &&
      setPlanInfo({
        option: plan,
        isMonthly,
      })
    push(STEPS[activeStep + 1].path)
  }
  return (
    <Container className={styles['container']}>
      <Box className={styles['cards-container']}>
        {CARDS_OPTIONS.map(option => (
          <SelectCard
            option={option}
            handleOnClick={handlePlan}
            isSelected={option.name === plan?.name}
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
        <Switch color="primary" onChange={handleSwitch} checked={!isMonthly} />
        <span
          className={`${styles['span']} ${!isMonthly && styles['is-selected']}`}
        >
          Yearly
        </span>
      </Box>
      <Box className={styles['buttons-container']}>
        <Button
          variant="text"
          size="medium"
          onClick={() => push(STEPS[activeStep - 1].path)}
          data-testid="back-btn"
        >
          Go Back
        </Button>
        <Button
          variant="contained"
          type="submit"
          size="medium"
          onClick={handleClick}
          data-testid="submit"
          disabled={!plan.name}
        >
          Next Step
        </Button>
      </Box>
    </Container>
  )
}
