import styled, { css } from 'styled-components'
import { useState } from 'react'
import IconProfile from 'assets/profile.svg'
import IconScene from 'assets/scene.svg'
import TabProfile from 'pages/HomeTabProfile'
import TabScene from 'pages/HomeTabScene'

import { Tabbar} from '@telegram-apps/telegram-ui';

function HomePage() {
  const [currentTab, setCurrentTab] = useState(tabs[0].id);
  const {Tab} = tabs.find(({id}) => id === currentTab)

  return (
    <>
     <Tab/>
     <Tabbar>
        {tabs.map(({
        id,
        text,
        Icon
      }) => <Tabbar.Item key={id} text={text} selected={id === currentTab} onClick={() => setCurrentTab(id)}>
            <IconContainer><Icon height="32" /></IconContainer>
          </Tabbar.Item>)}
      </Tabbar>
    </>
  )
}

export const IconContainer = styled.div`
  padding: 6px;
`


const tabs = [
  {
    id: 1,
    text: 'Scene',
    Icon: IconScene,
    Tab: TabScene,
  },
  {
    id: 2,
    text: 'Profile',
    Icon: IconProfile,
    Tab: TabProfile,
  } 
]


export default HomePage
