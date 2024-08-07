import { List, Caption, Subheadline, Section } from '@telegram-apps/telegram-ui'
import useAccountState from 'account/useAccountState'
import SceneItem from 'scenes/SceneItem'
import styled from 'styled-components'

import { SeedClubIcon } from '../core/icons'

import Brand1Photo from 'assets/brand1.png'
import Brand2Photo from 'assets/brand2.png'
import Brand3Photo from 'assets/brand3.png'
import Brand5Photo from 'assets/brand5.png'
import Brand7Photo from 'assets/brand7.png'
import Brand8Photo from 'assets/brand8.png'

const HomeTabScene = () => {
  const { claimedRewards, claimRewards, completedScenes } = useAccountState()
  const activeScenes = sceneList.filter(
    ({ isActive, id }) => isActive && !completedScenes[id]
  )
  const inActiveScenes = sceneList.filter(
    ({ isActive, id }) => !isActive && !completedScenes[id]
  )

  return (
    <SceneLayout>
      <AccountRow>
        <SeedClubAccountLogo height={32} />

        <AccountSummaryColumn>
          <Subheadline level="1" weight="1">
            username.eth
          </Subheadline>

          <Caption>
            {claimedRewards.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
            $CLUB
          </Caption>
        </AccountSummaryColumn>
      </AccountRow>

      <List>
        <Section header="Welcome back to Spec Port">
          <SceneList>
            {activeScenes.map(scene => (
              <SceneListItem key={scene.id}>
                <SceneItem scene={scene} claimRewards={claimRewards} />
              </SceneListItem>
            ))}
          </SceneList>
        </Section>

        <Section header="Up for adoption">
          <SceneList>
            {inActiveScenes.map(scene => (
              <SceneListItem key={scene.id}>
                <SceneItem scene={scene} />
              </SceneListItem>
            ))}
          </SceneList>
        </Section>
      </List>
    </SceneLayout>
  )
}

const sceneList = [
  {
    id: 1,
    name: 'friend.tech',
    duration: '77d 23h 59m 59s',
    isActive: true,
    progress: 100,
    BrandIcon: <img src={Brand2Photo} height="64" />,
    reward: 310
  },
  {
    id: 2,
    name: 'friend.tech',
    duration: '29d 23h 59m 59s',
    isActive: true,
    progress: 50,
    BrandIcon: <img src={Brand1Photo} height="64" />,
    reward: 20
  },
  {
    id: 3,
    name: 'friend.tech',
    duration: '67d 23h 59m 59s',
    isActive: true,
    progress: 80,
    BrandIcon: <img src={Brand5Photo} height="64" />,
    reward: 70
  },
  {
    id: 4,
    name: 'friend.tech',
    duration: '280d 23h 59m 59s',
    isActive: true,
    progress: 100,
    BrandIcon: <img src={Brand8Photo} height="64" />,
    reward: 790
  },
  {
    id: 5,
    name: 'friend.tech',
    duration: '7d 23h 59m 59s',
    progress: 50,
    BrandIcon: <img src={Brand7Photo} height="64" />,
    reward: 110
  },
  {
    id: 6,
    name: 'friend.tech',
    duration: '329d 23h 59m 59s',
    progress: 50,
    BrandIcon: <img src={Brand3Photo} height="64" />,
    reward: 90
  }
]

export const SceneList = styled(List)`
  padding-bottom: 16px;
`

export const SceneListItem = styled.div`
  margin: 16px 8px 0px 8px;
  padding: 16px 24px;
  background: var(--tgui--secondary_bg_color);
  border-radius: 12px;
  overflow: hidden;
`

export const SceneLayout = styled.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
  min-height: 100vh;
  padding-bottom: 120px;
`

export const AccountRow = styled.div`
  display: flex;
  flex-flow: row;
  gap: 8px;
  justify-content: space-between;
`

export const AccountSummaryColumn = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 0 24px;
`

export const SeedClubAccountLogo = styled(SeedClubIcon)`
  padding: 24px;
  box-sizing: content-box;
`

export default HomeTabScene
