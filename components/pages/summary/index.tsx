import {Box, Button, Container, Divider, Link} from '@mui/material'
import styles from './styles.module.scss'
import {MouseEvent, useContext} from 'react'
import {useRouter} from 'next/router'
import {STEPS} from '@/components/Stepper/constants'
import {FormContext} from '@/context'

interface Props {
  activeStep: number
}
export default function Summary({activeStep}: Props) {
  const {push} = useRouter()
  const {planInfo, addOnsInfo} = useContext(FormContext)
  const handleClickPlan = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    push('/Plan')
  }

  const totalPerMonth = addOnsInfo.reduce(
    (sum, curr) => sum + curr.price,
    planInfo.option.price,
  )

  const handleClickConfirm = () => {}
  return (
    <Container className={styles['container']}>
      <Box className={styles['summary-container']}>
        <Box className={styles['summary-description']}>
          <Box className={`${styles['description']} ${styles['plan-descr']}`}>
            <Box className={styles['descr-title']}>
              <span>{`${planInfo.option?.name}(${
                planInfo.isMonthly ? 'Monthly' : 'Yearly'
              })`}</span>
              <a href="/plan" onClick={handleClickPlan}>
                Change
              </a>
            </Box>
            <span>{`+$${planInfo.option?.price}/mo`}</span>
          </Box>
          <Divider variant="middle" />
          {addOnsInfo.map(addOn => (
            <Box className={styles['description']} key={addOn.name}>
              <span>{`${addOn.name}`}</span>
              <span>{`+$${addOn.price}/mo`}</span>
            </Box>
          ))}
        </Box>
        <Box className={`${styles['description']} ${styles['total']}`}>
          <span>Total(per month)</span>
          <span
            className={styles['total-amount']}
          >{`+${totalPerMonth}/mo`}</span>
        </Box>
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
          onClick={handleClickConfirm}
          data-testid="submit"
        >
          Confirm
        </Button>
      </Box>
    </Container>
  )
}
