import styled, { css } from 'styled-components'
import TransactionIcon from 'assets/TransactionIcon.svg'
import SeedClubLogo from 'assets/SeedClubLogo.svg'
import AvatarPhoto from 'assets/avatar.png'
import Brand1Photo from 'assets/brand1.png'
import Brand2Photo from 'assets/brand2.png'
import Brand3Photo from 'assets/brand3.png'
import Brand4Photo from 'assets/brand4.png'
import Brand5Photo from 'assets/brand5.png'
import Brand6Photo from 'assets/brand6.png'
import Brand7Photo from 'assets/brand7.png'
import Brand8Photo from 'assets/brand8.png'
import Brand9Photo from 'assets/brand9.png'
import Brand10Photo from 'assets/brand10.png'
import Brand11Photo from 'assets/brand11.png'
import Brand12Photo from 'assets/brand12.png'
import useAccountState from 'account/useAccountState'

import { Tabbar, List,Avatar,Caption,Subheadline,Button, Section,Cell ,Chip} from '@telegram-apps/telegram-ui';


const HomeTabProfile = () => {
  const {claimedRewards} = useAccountState();

  return (
  <ProfileLayout>
    <AvatarRow>
      <Avatar
        size={96}
        src={AvatarPhoto}
      />

      <ClaimCountRow>
      <ClaimCountLogo height="16"/><ClaimCountCaption
        level="1"
        weight="3"
      >
        000 000 001
        </ClaimCountCaption>
      </ClaimCountRow>

    </AvatarRow>

    <Subheadline
        level="1"
        weight="2"
      >
        username.eth
    </Subheadline>

    <SocialRow>




      <Button
  mode="filled"
  size="s"
>
  0xd7da...0498
</Button>

<Button
  mode="filled"
  size="s"
>
  @twitter
</Button>

<Button
  mode="filled"
  size="s"
>
  @warpcast
</Button>
    </SocialRow>


    <StatusRow>

<Chip mode="mono" before={<SeedClubTokenLogo height="16"/>} after="$club">
      {claimedRewards}
    </Chip>
    
<Chip mode="mono" before={<TransactionsIcon height="16"/>} after="txns">
      35647
    </Chip>
    </StatusRow>

<Section header="Active Scenes">
<BrandActiveRow>
<BrandIcon><img src={Brand1Photo} height="64"/></BrandIcon>
<BrandIcon><img src={Brand2Photo} height="64"/></BrandIcon>
<BrandIcon active><img src={Brand3Photo} height="64"/></BrandIcon>
<BrandIcon active><img src={Brand4Photo} height="64"/></BrandIcon>
<BrandIcon><img src={Brand5Photo} height="64"/></BrandIcon>
<BrandIcon><img src={Brand6Photo} height="64"/></BrandIcon>
<BrandIcon active><img src={Brand7Photo} height="64"/></BrandIcon>
<BrandIcon><img src={Brand8Photo} height="64"/></BrandIcon>
</BrandActiveRow>

</Section>


<Section header="Recommended Scenes">
<BrandRecommendedRow  >
<BrandIcon active><img src={Brand9Photo} height="64"/></BrandIcon>
<BrandIcon active><img src={Brand10Photo} height="64"/></BrandIcon>
<BrandIcon active><img src={Brand11Photo} height="64" style={{backgroundColor: 'black'}}/></BrandIcon>
<BrandIcon><img src={Brand12Photo} height="64" /></BrandIcon>
</BrandRecommendedRow>
</Section>

  </ProfileLayout>
  )
}

export const ProfileLayout = styled.div`
  display: flex;
  padding: 16px;
  gap: 12px;
  flex-flow: column;
  min-height: 100vh;
  padding-bottom: 120px;
`

export const AvatarRow = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  flex-flow: row;
`


export const ClaimCountCaption = styled(Caption)`
  opacity: 0.5;
  font-size: 16px;
`


export const ClaimCountRow = styled.div`
  display: flex;
  gap: 6px;
  flex-flow: row;
`



export const SocialRow = styled.div`
  display: flex;
  gap: 12px;
  flex-flow: row;
`


export const StatusRow = styled.div`
      display: grid;
    grid-template-columns: 1fr 1fr;
  gap: 12px;
`


export const BrandActiveRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
    --tgui--cell--middle--padding: 16px 0;
    align-items: center;
    padding: 16px 24px;
`

export const BrandRecommendedRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  --tgui--cell--middle--padding: 16px 0;
    align-items: center;
    padding: 16px 24px;
`

export const ClaimCountLogo = styled(SeedClubLogo)`
  opacity: 0.5;
`

export const SeedClubTokenLogo = styled(SeedClubLogo)`
  opacity: 0.5;
    display: flex;
`

export const TransactionsIcon = styled(TransactionIcon)`
    display: flex;
  opacity: 0.5;
`




export const BrandLogo = styled.div`
  border-radius: 12px;
  border-width: 2px;
  border-color: ${({active}) => active ? 'black' : 'transparent'};
  border-style: solid;
  overflow: hidden;
  height: 64px;
  width: 64px;
      position: relative;

`

export const SeedClubBrandIcon = styled(SeedClubLogo)`
  height: 16px;
  width: 16px;
  padding: 3px;
  background: black;
    position: absolute;
    right: 0;
    top: 0;
  border-radius: 0 0 0 12px;
  overflow: hidden;
`


const BrandIcon = ({active, children}) => <BrandLogo active={active}>{children}
  {active && <SeedClubBrandIcon />}
</BrandLogo>

export default HomeTabProfile