import Step from '@mui/material/Step'
import StepperUI from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import useMediaQuery from '@mui/material/useMediaQuery'
import {Box, Container} from '@mui/material'
import styles from './styles.module.scss'
import {STEPS} from './constants'

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
  const isMobile = useMediaQuery('(min-width:600px)')

  return (
    <Container className={styles['container']}>
      <Box className={styles['stepper-container']}>
        <StepperUI
          activeStep={activeStep}
          orientation="vertical"
          connector={null}
          className={styles['steps']}
        >
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                className={styles['step-label']}
                optional={<h3>{step.label}</h3>}
                icon={<span>{index + 1}</span>}
                sx={{
                  '.Mui-active.MuiStepLabel-iconContainer span': {
                    backgroundColor: '#BEE2FD',
                    color: '#022959',
                  },
                  '.Mui-disabled.MuiStepLabel-iconContainer span': {
                    border: '1px solid #ffffff;',
                    color: 'white',
                  },
                  '.MuiStepLabel-labelContainer span': {
                    color: '#ABBCFF',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '14px',
                    marginBottom: '4px',
                  },
                }}
              >
                {step.description}
              </StepLabel>
            </Step>
          ))}
        </StepperUI>
      </Box>
      {children}
    </Container>
  )
}

export default Stepper
