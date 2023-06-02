import {createContext} from 'react'
import {State} from './types'
import {initialState} from './constants'

export const FormContext = createContext<State>(initialState)
