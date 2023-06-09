import Step from '@mui/material/Step'
import StepperUI from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import useMediaQuery from '@mui/material/useMediaQuery'
import {Box, Container} from '@mui/material'
import styles from './styles.module.scss'
import {STEPS, stepperOverrides} from './constants'

interface IStep {
  label: string
  description?: string
}

interface Props {
  children: JSX.Element
  steps?: IStep[]
  activeStep: number
}

function Stepper({children, steps = STEPS, activeStep}: Props) {
  const isMobile = useMediaQuery('(max-width: 700px)')

  return (
    <Container className={styles['container']}>
      <Box className={styles['stepper-container']}>
        <StepperUI
          activeStep={activeStep}
          orientation={isMobile ? 'horizontal' : 'vertical'}
          connector={null}
          className={styles['steps']}
        >
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                className={styles['step-label']}
                optional={<h3>{step.label}</h3>}
                icon={<span>{index + 1}</span>}
                data-testid={`step-label-${index + 1}`}
                sx={stepperOverrides(isMobile)}
              >
                {step.description}
              </StepLabel>
            </Step>
          ))}
        </StepperUI>
      </Box>
      <Box className={styles['page-container']}>{children}</Box>
    </Container>
  )
}

export default Stepper
