import {State} from './types'

export const initialState: State = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
  },
  planInfo: {
    option: {
      name: '',
      price: 0,
      icon: '',
    },
    isMonthly: true,
  },
  addOnsInfo: [],
}
