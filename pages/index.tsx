import Stepper from '@/components/Stepper'
import PersonalInfoForm from '@/components/pages/forms/PersonalInfoForm'
import {Box, Container} from '@mui/material'
import styles from './styles.module.scss'

export default function Home() {
  const ACTIVE_STEP = 0
  return (
    <Stepper activeStep={ACTIVE_STEP}>
      <Container className={styles['container']}>
        <Box className={styles['title-container']}>
          <h1 className={styles['title']}>Personal Info</h1>
          <span className={styles['description']}>
            Please provide your name, email address, and phone number.
          </span>
        </Box>
        <PersonalInfoForm activeStep={ACTIVE_STEP}/>
      </Container>
    </Stepper>
  )
}
