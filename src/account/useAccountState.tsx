import { useContext } from 'react'
import AccountContext from './AccountContext'

const useAccountState = () => {
  const context = useContext(AccountContext)

  return context
}

export default useAccountState
