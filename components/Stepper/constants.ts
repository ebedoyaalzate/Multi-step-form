import {Step} from './types'

export const STEPS: Step[] = [
  {
    label: 'YOUR INFO',
    description: 'STEP 1',
    path: '/',
  },
  {
    label: 'SELECT PLAN',
    description: 'STEP 2',
    path: '/Plan',
  },
  {
    label: 'ADD-ONS',
    description: 'STEP 3',
    path: '/add-ons',
  },
  {
    label: 'SUMMARY',
    description: 'STEP 4',
    path: '/summary',
  },
]

export const stepperOverrides = (isMobile: boolean) => {
  return {
    '.Mui-active.MuiStepLabel-iconContainer span': {
      backgroundColor: '#BEE2FD',
      color: '#022959',
    },
    '.Mui-disabled.MuiStepLabel-iconContainer span': {
      border: '1px solid #ffffff',
      color: 'white',
    },
    '.Mui-completed.MuiStepLabel-iconContainer span': {
      border: '1px solid #ffffff',
      color: 'white',
    },
    '.MuiStepLabel-iconContainer span': {
      marginRight: isMobile ? '0' : '16px',
    },
    '.MuiStepLabel-labelContainer span': {
      color: '#ABBCFF',
      fontWeight: '400',
      fontSize: '12px',
      lineHeight: '14px',
      marginBottom: '4px',
    },
    '.MuiStepLabel-labelContainer': {
      display: isMobile ? 'none' : '',
    },
  }
}
