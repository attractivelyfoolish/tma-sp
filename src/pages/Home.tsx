import { useState } from 'react'

import { Tabbar, FixedLayout } from '@telegram-apps/telegram-ui'
import styled from 'styled-components'

import TabProfile from 'pages/HomeTabProfile'
import TabScene from 'pages/HomeTabScene'

import { ProfileIcon, SceneIcon } from '../core/icons'

function HomePage() {
  const [currentTab, setCurrentTab] = useState(tabs[1].id)
  const { Tab } = tabs.find(({ id }) => id === currentTab) || {}

  return (
    <>
      <TabContainer>{Tab && <Tab />}</TabContainer>

      <FixedLayout>
        <Tabbar>
          {tabs.map(({ id, text, Icon }) => (
            <Tabbar.Item
              key={id}
              text={text}
              selected={id === currentTab}
              onClick={() => setCurrentTab(id)}
            >
              <IconContainer>
                <Icon height={32} />
              </IconContainer>
            </Tabbar.Item>
          ))}
        </Tabbar>
      </FixedLayout>
    </>
  )
}

export const IconContainer = styled.div`
  padding: 6px;
`

export const TabContainer = styled.div``

const tabs = [
  {
    id: 1,
    text: 'Scene',
    Icon: SceneIcon,
    Tab: TabScene
  },
  {
    id: 2,
    text: 'Profile',
    Icon: ProfileIcon,
    Tab: TabProfile
  }
]

export default HomePage
