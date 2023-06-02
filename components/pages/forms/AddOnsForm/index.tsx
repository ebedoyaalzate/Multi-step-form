import {Box, Button, Container} from '@mui/material'
import {ADD_ONS_OPTIONS} from './constants'
import CheckCard from './components/CheckCard'
import {useContext, useState} from 'react'
import {AddOns} from './types'
import styles from './styles.module.scss'
import {useRouter} from 'next/router'
import {STEPS} from '@/components/Stepper/constants'
import {FormContext} from '@/context'

interface Props {
  activeStep: number
}
export default function AddOnsForm({activeStep}: Props) {
  const {addOnsInfo, setAddOnsInfo} = useContext(FormContext)
  const [addOns, setAddOns] = useState<AddOns[]>(addOnsInfo)
  const {push} = useRouter()

  const handleChange = (option: AddOns) => {
    const existAdd = addOns.some(add => add.name === option.name)
    const newAddons = existAdd
      ? addOns.filter(add => add.name !== option.name)
      : [...addOns, option]
    setAddOns(newAddons)
  }

  const handleClick = () => {
    setAddOnsInfo && setAddOnsInfo([...addOns])
    push(STEPS[activeStep + 1].path)
  }

  return (
    <Container className={styles['container']}>
      <Box className={styles['cards-container']}>
        {ADD_ONS_OPTIONS.map(option => (
          <CheckCard
            option={option}
            key={option.name}
            handleOnChange={handleChange}
            isChecked={addOns.some(opt => opt.name === option.name)}
          ></CheckCard>
        ))}
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
        >
          Next Step
        </Button>
      </Box>
    </Container>
  )
}
