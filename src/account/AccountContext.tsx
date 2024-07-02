import { ReactNode, createContext } from 'react'
import { Scene } from '../scenes/SceneItem'
import useAccountContext from './useAccountContext'

const AccountContext = createContext<AccountState>({
  claimedRewards: 0,
  claimRewards: () => {},
  completedScenes: {}
})

export interface AccountState {
  claimedRewards: number
  claimRewards: ({ id, reward }: Scene) => void
  completedScenes: Record<string, boolean>
}

export const AccountProviderPassthrough = ({
  accountState,
  children
}: {
  accountState: AccountState
  children: ReactNode
}) => {
  return (
    <AccountContext.Provider value={accountState}>
      {children}
    </AccountContext.Provider>
  )
}

export const AccountProviderStateful = ({
  children
}: {
  children: ReactNode
}) => {
  const accountContext = useAccountContext()

  return (
    <AccountContext.Provider value={accountContext}>
      {children}
    </AccountContext.Provider>
  )
}

export const AccountProvider = ({
  accountState,
  children
}: {
  accountState?: AccountState
  children: ReactNode
}) => {
  if (accountState) {
    return (
      <AccountProviderPassthrough accountState={accountState}>
        {children}
      </AccountProviderPassthrough>
    )
  }

  return <AccountProviderStateful>{children}</AccountProviderStateful>
}

export default AccountContext
