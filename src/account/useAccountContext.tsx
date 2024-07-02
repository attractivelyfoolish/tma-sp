import { useCallback, useMemo, useRef, useState } from 'react'
import { Scene } from '../scenes/SceneItem'

const useAccountContext = () => {
  const [claimedRewards, setClaimedRewards] = useState(1123)
  const completedScenes = useRef<Record<string, boolean>>({})

  const claimRewards = useCallback(
    ({ id, reward }: Scene) => {
      completedScenes.current[id] = true

      setClaimedRewards(reward + claimedRewards)
    },
    [claimedRewards]
  )

  const accountContext = useMemo(() => {
    return {
      claimedRewards,
      claimRewards,
      completedScenes: completedScenes.current
    }
  }, [claimedRewards, claimRewards, completedScenes])

  return accountContext
}

export default useAccountContext
