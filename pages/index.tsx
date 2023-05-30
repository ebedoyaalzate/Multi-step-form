import Stepper from '@/components/Stepper'
import PersonalInfoForm from '@/components/forms/PersonalInfoForm'
import {Box, Container} from '@mui/material'
import styles from './styles.module.scss'

export default function Home() {
  return (
    <Stepper activeStep={0}>
      <Container className={styles['container']}>
        <Box className={styles['title-container']}>
          <h1 className={styles['title']}>Personal Info</h1>
          <span className={styles['description']}>
            Please provide your name, email address, and phone number.
          </span>
        </Box>
        <PersonalInfoForm />
      </Container>
    </Stepper>
  )
}
