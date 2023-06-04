import {State} from '@/context/types'

export const initialMockState: State = {
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
