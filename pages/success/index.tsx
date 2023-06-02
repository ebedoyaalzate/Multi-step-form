import Stepper from '@/components/Stepper'
import {Container} from '@mui/material'
import styles from './styles.module.scss'
import Image from 'next/image'

export default function Success() {
  const ACTIVE_STEP = 3
  return (
    <Stepper activeStep={ACTIVE_STEP}>
      <Container className={styles['container']}>
        <Image
          className={styles['icon']}
          src="images/success.svg"
          alt="success-icon"
          height={80}
          width={80}
        />
        <h1 className={styles['title']} data-testid="header-title">
          Thank you!
        </h1>
        <p className={styles['description']}>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </Container>
    </Stepper>
  )
}
