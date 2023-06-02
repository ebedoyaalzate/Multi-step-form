import Stepper from '@/components/Stepper'
import {Box, Container} from '@mui/material'
import styles from '../styles.module.scss'
import Summary from '@/components/pages/summary'

export default function SummaryPage() {
  const ACTIVE_STEP = 3
  return (
    <Stepper activeStep={ACTIVE_STEP}>
      <Container className={styles['container']}>
        <Box className={styles['title-container']}>
          <h1 className={styles['title']}>Finishing up</h1>
          <span className={styles['description']}>
            Double-check everything looks OK before confirming.
          </span>
        </Box>
        <Summary activeStep={ACTIVE_STEP} />
      </Container>
    </Stepper>
  )
}
