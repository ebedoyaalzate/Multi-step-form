import {PersonalForm} from '@/components/pages/forms/PersonalInfoForm/types'
import {useState} from 'react'
import {initialState} from './constants'
import {PlanInfo} from './types'
import {AddOns} from '@/components/pages/forms/AddOnsForm/types'
import {FormContext} from '.'

interface Props {
  children: JSX.Element
}
export default function Store({children}: Props) {
  const [personalInfo, setPersonalInfo] = useState<PersonalForm>(
    initialState.personalInfo,
  )
  const [planInfo, setPlanInfo] = useState<PlanInfo>(initialState.planInfo)
  const [addOnsInfo, setAddOnsInfo] = useState<AddOns[]>(
    initialState.addOnsInfo,
  )

  return (
    <FormContext.Provider
      value={{
        personalInfo,
        planInfo,
        addOnsInfo,
        setPersonalInfo,
        setPlanInfo,
        setAddOnsInfo,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
