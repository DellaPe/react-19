import { useReducer, useState } from "react"

export const SHOW_ACTIONS = {
  SHOW_FROM_METHODS: 'SHOW_FROM_METHODS',
  SHOW_FROM_REF: 'SHOW_FROM_REF',
  SHOW_USE_EXAMPLE: 'SHOW_USE_EXAMPLE',
  SHOW_USE_CONTEXT_EXAMPLE: 'SHOW_USE_CONTEXT_EXAMPLE',
  SHOW_USE_ACTIONS_EXAMPLE: 'SHOW_USE_ACTIONS_EXAMPLE',
  SHOW_USE_OPTIMISTIC_EXAMPLE: 'SHOW_USE_OPTIMISTIC_EXAMPLE'
}

const initialState = () => {
  return {
    [SHOW_ACTIONS.SHOW_FROM_METHODS]: false,
    [SHOW_ACTIONS.SHOW_FROM_REF]: false,
    [SHOW_ACTIONS.SHOW_USE_EXAMPLE]: false,
    [SHOW_ACTIONS.SHOW_USE_CONTEXT_EXAMPLE]: false,
    [SHOW_ACTIONS.SHOW_USE_ACTIONS_EXAMPLE]: false,
    [SHOW_ACTIONS.SHOW_USE_OPTIMISTIC_EXAMPLE]: false
  }
}

const reducer = (state, action) => {
  return {
    ...state,
    [action.type]: !state[action.type]
  }
}



export function useShowExample() {
  const [show, dispatch] = useReducer(reducer, initialState())
  const [isNull, setIsNull] = useState(true)
  const handleShow = (type) => {
    dispatch({ type })
    if (Object.values(show).find(value => value)) {
      setIsNull(true)
    } else {
      setIsNull(false)
    }
  }
  return { isNull, show, handleShow }
}