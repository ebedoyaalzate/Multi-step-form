import {Box, Container} from '@mui/material'
import styles from './styles.module.scss'
import {PlanOptions} from '../types'
import Image from 'next/image'

interface Props {
  option: PlanOptions
  handleOnClick: (option: PlanOptions) => void
  isSelected: boolean
}

export default function SelectCard({option, handleOnClick, isSelected}: Props) {
  return (
    <Container
      className={`${styles['container']} ${
        isSelected && styles['is-selected']
      }`}
      onClick={() => handleOnClick(option)}
      data-testid={`${option.name}-card`}
    >
      <Image
        className={styles['icon']}
        src={option.icon}
        alt={`${option.name}-icon`}
        height={40}
        width={40}
      />
      <Box className={styles['title-container']}>
        <h3 className={styles['name']}>{option.name}</h3>
        <span className={styles['price']}>{`$${option.price}/mo`}</span>
      </Box>
    </Container>
  )
}
