import Stepper from '@/components/Stepper'
import {Box, Container} from '@mui/material'
import styles from '../styles.module.scss'
import AddOnsForm from '@/components/pages/forms/AddOnsForm'

export default function AddOns() {
  const ACTIVE_STEP = 2
  return (
    <Stepper activeStep={ACTIVE_STEP}>
      <Container className={styles['container']}>
        <Box className={styles['title-container']}>
          <h1 className={styles['title']} data-testid="header-title">
            Pick add-ons
          </h1>
          <span className={styles['description']}>
            Add-ons help enhance your gaming experience.
          </span>
        </Box>
        <AddOnsForm activeStep={ACTIVE_STEP} />
      </Container>
    </Stepper>
  )
}
