import {Box, Button, CircularProgress, Container, Icon} from '@mui/material'
import styles from './styles.module.scss'
import {CardOptions} from '../types'

interface Props {
  option: CardOptions
  handleOnClick: (option: CardOptions) => void
  isSelected: boolean
}

export default function SelectCard({option, handleOnClick, isSelected}: Props) {
  return (
    <Container
      className={`${styles['container']} ${
        isSelected && styles['is-selected']
      }`}
      onClick={() => handleOnClick(option)}
    >
      <CircularProgress className={styles['icon']} />
      <Box className={styles['title-container']}>
        <h3 className={styles['name']}>{option.name}</h3>
        <span className={styles['price']}>{option.price}</span>
      </Box>
    </Container>
  )
}
