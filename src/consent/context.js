import { createContext } from 'react'

export const ConsentContext = createContext(null)

// Third-party services that set cookies and therefore need consent.
export const SERVICES = ['youtube', 'maps']
