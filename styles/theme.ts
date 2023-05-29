import {createTheme} from '@mui/material'

export const theme = createTheme({
  components: {
    MuiStepLabel: {
      styleOverrides: {
        root: {
          margin: '30px 16px 0 0',
        },
        iconContainer: {
          span: {
            color: 'white',
            width: '33px',
            height: '33px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '16px',
          },
        },
        labelContainer: {
          h3: {
            color: 'white',
            fontWeight: '700',
            fontSize: '14px',
            lineHeight: '16px',
          },
        },
      },
    },
  },
})
