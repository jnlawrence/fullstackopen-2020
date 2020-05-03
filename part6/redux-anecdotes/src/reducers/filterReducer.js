export const setFilter = filter => {
  return {
    type: 'SET_FILTER',
    data: { filter },
  }
}

export const clearFilter = () => {
  return {
    type: 'CLEAR_FILTER',
  }
}

const reducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.data.filter

    case 'CLEAR_FILTER':
      return ''

    default:
      return state
  }
}

export default reducer
