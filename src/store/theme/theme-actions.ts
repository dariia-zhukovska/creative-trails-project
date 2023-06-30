import { createAction } from '@reduxjs/toolkit'
import { SET_THEME, SetThemeAction } from './theme-actions-types'


export const setTheme = createAction(SET_THEME, (payload) => ({ payload }))