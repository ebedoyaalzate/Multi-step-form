import Stepper from '@/components/Stepper'
import {Box, Container} from '@mui/material'
import styles from '../styles.module.scss'
import PlanForm from '@/components/pages/forms/PlanForm'

export default function SelectPlan() {
  const ACTIVE_STEP = 1
  return (
    <Stepper activeStep={ACTIVE_STEP}>
      <Container className={styles['container']}>
        <Box className={styles['title-container']}>
          <h1 className={styles['title']} data-testid="header-title">
            Select your plan
          </h1>
          <span className={styles['description']}>
            You have the option of monthly or yearly billing.
          </span>
        </Box>
        <PlanForm activeStep={ACTIVE_STEP} />
      </Container>
    </Stepper>
  )
}
