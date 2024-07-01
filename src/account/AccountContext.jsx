import { useRef, useCallback, useMemo, createContext, useState } from 'react'

const AccountContext = createContext()

export const useAccountContext = () => {
  const [claimedRewards, setClaimedRewards] = useState(1123)
  const completedScenes = useRef({})

  const claimRewards = useCallback(({id, reward}) => {
    completedScenes.current[id] = true;
    
    setClaimedRewards(reward + claimedRewards)
  }, [claimedRewards])

  const accountContext = useMemo(() => {
    return {
      claimedRewards, claimRewards, completedScenes
    }
  }, [claimedRewards, claimRewards, completedScenes])

  return accountContext
}

export const AccountProviderPassthrough = ({ accountState, children }) => {
  return <AccountContext.Provider value={accountState}>{children}</AccountContext.Provider>
}

export const AccountProviderStateful = ({ children }) => {
  const accountContext = useAccountContext()

  return <AccountContext.Provider value={accountContext}>{children}</AccountContext.Provider>
}

export const AccountProvider = ({ accountState, children }) => {
  if (accountState) {
    return <AccountProviderPassthrough accountState={accountState}>{children}</AccountProviderPassthrough>
  }

  return <AccountProviderStateful>{children}</AccountProviderStateful>
}

export default AccountContext
