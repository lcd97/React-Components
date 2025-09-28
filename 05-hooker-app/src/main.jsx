import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HooksApp } from './hooksApp'
// import { MemoHook } from './06-Memos/memoHook'
// import { CallbackHook } from './06-Memos/CallbackHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-Examples/MultipleCustomHooks'
// import { Layout } from './05-useLayoutEffect/Layout'

import { Padre } from './07-tarea-memo/Padre'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Padre />
  /* </StrictMode>, */
)
