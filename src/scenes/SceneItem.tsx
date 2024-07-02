import { ReactNode } from 'react'

import { Button, Progress, Caption } from '@telegram-apps/telegram-ui'
import styled from 'styled-components'

import { RightArrowIcon, SpotsOpenIcon as SpotsOpen } from '../core/icons'

export interface Scene {
  id: number
  name: string
  reward: number
  duration: string
  BrandIcon: ReactNode
  progress: number
  isActive?: boolean
}

export interface SceneItemProps {
  scene: Scene
  claimRewards?: ({ id, reward }: Scene) => void
}

const SceneItem = ({ scene, claimRewards }: SceneItemProps) => {
  const { name, reward, duration, BrandIcon, progress, isActive } = scene
  const isInActive = !isActive
  const isInProgress = isActive && progress < 100
  const isCompleted = isActive && progress >= 100

  return (
    <SceneItemLayout>
      <SceneProgressSection>
        {BrandIcon}

        <SceneProgressColumn>
          <SceneProgressDuration>
            {(isInProgress || isCompleted) && (
              <Caption level="1" weight="1">
                {!isCompleted ? duration : 'COMPLETE'}
              </Caption>
            )}

            {(isInProgress || isCompleted) && (
              <Caption level="1" weight="2">
                {reward} $CLUB
              </Caption>
            )}

            {isInActive && (
              <Caption level="1" weight="2">
                <SpotsOpenText>
                  2 spots left
                  <SpotsOpenIcon>
                    <SpotsOpen height={16} />
                  </SpotsOpenIcon>
                </SpotsOpenText>
              </Caption>
            )}
          </SceneProgressDuration>

          {(isInProgress || isCompleted) && (
            <SceneProgressBarRow>
              <SceneProgressBar>
                <Progress value={progress} />
              </SceneProgressBar>

              <Caption level="1" weight="3">
                {progress}%
              </Caption>
            </SceneProgressBarRow>
          )}
        </SceneProgressColumn>
      </SceneProgressSection>

      <SceneInfoSection>
        <SceneInfoRow>
          <Caption level="1" weight="1">
            {name}
          </Caption>

          {isInProgress && (
            <Caption level="1" weight="3">
              {Math.floor((4 * progress) / 100)}/4
            </Caption>
          )}
        </SceneInfoRow>

        {(isInActive || isInProgress) && (
          <SceneInfoRow>
            <Caption level="1" weight="3">
              {isInProgress ? 'Join 4 Rooms' : 'Join 1 room to unlock'}
            </Caption>

            <RightArrowIcon height={16} />
          </SceneInfoRow>
        )}

        {isCompleted && (
          <SceneCompleteRow>
            <Button
              stretched
              mode="bezeled"
              size="s"
              onClick={() => claimRewards?.(scene)}
            >
              Claim {reward} $CLUB
            </Button>
          </SceneCompleteRow>
        )}
      </SceneInfoSection>
    </SceneItemLayout>
  )
}

export const SpotsOpenText = styled.div`
  display: flex;
  flex-flow: row;
  gap: 6px;
`

export const SpotsOpenIcon = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
`

export const SceneItemLayout = styled.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
`

export const SceneProgressSection = styled.div`
  display: flex;
  flex-flow: row;
  gap: 16px;
  justify-content: space-between;
`

export const SceneProgressColumn = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  gap: 6px;
  flex-grow: 1;
`

export const SceneProgressBarRow = styled.div`
  display: flex;
  flex-flow: row;
  gap: 6px;
  justify-content: space-between;
`

export const SceneProgressBar = styled.div`
  border-radius: 5px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: column;
`

export const SceneProgressDuration = styled.div`
  display: flex;
  flex-flow: column;
  text-align: right;
  align-self: end;
`

export const SceneInfoSection = styled.div`
  display: flex;
  flex-flow: column;
  gap: 4px;
`

export const SceneInfoRow = styled.div`
  display: flex;
  flex-flow: row;
  gap: 8px;
  justify-content: space-between;
`

export const SceneCompleteRow = styled.div`
  display: flex;
  margin-top: 8px;
`

export default SceneItem
