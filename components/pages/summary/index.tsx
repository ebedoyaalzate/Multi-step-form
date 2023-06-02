import {Box, Button, Container, Divider, Link} from '@mui/material'
import styles from './styles.module.scss'

export default function Summary() {
  return (
    <Container className={styles['container']}>
      <Box className={styles['summary-container']}>
        <Box className={styles['summary-description']}>
          <Box className={`${styles['description']} ${styles['plan-descr']}`}>
            <Box className={styles['descr-title']}>
              <span>Arcade(Monthly)</span>
              <Link href="/plan">Change</Link>
            </Box>
            <span>{`+$12/mo`}</span>
          </Box>
          <Divider variant="middle" />
          <Box className={styles['description']}>
            <span>{`${'Larger storage'}`}</span>
            <span>{`+$12/mo`}</span>
          </Box>
        </Box>
        <Box className={`${styles['description']} ${styles['total']}`}>
          <span>Total(per month)</span>
          <span className={styles['total-amount']}>{`+$12/mo`}</span>
        </Box>
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
          Confirm
        </Button>
      </Box>
    </Container>
  )
}
