import {AddOns} from '@/components/pages/forms/AddOnsForm/types'
import {PersonalForm} from '@/components/pages/forms/PersonalInfoForm/types'
import {PlanOptions} from '@/components/pages/forms/PlanForm/types'
import {Dispatch, SetStateAction} from 'react'

export interface PlanInfo {
  option: PlanOptions
  isMonthly: boolean
}

export interface State {
  personalInfo: PersonalForm
  planInfo: PlanInfo
  addOnsInfo: AddOns[]
  setPersonalInfo?: Dispatch<SetStateAction<PersonalForm>>
  setPlanInfo?: Dispatch<SetStateAction<PlanInfo>>
  setAddOnsInfo?: Dispatch<SetStateAction<AddOns[]>>
}
