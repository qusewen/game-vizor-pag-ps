'use client'

import {
  AboutSubscribeBlock,
  AsideMenu,
  AsideNavMenu,
  BypassBlock,
  FeedBackBlock,
  GameBlock,
  GameMonth,
  GuaranteesBlock,
  HowItsWorkBlock,
  SubBlock,
  SubscribeBlock,
} from 'shared/_ui'

export default function Home() {
  return (
    <>
      <SubBlock />
      <BypassBlock />
      <HowItsWorkBlock />
      <SubscribeBlock />
      <AboutSubscribeBlock />
      <GameBlock />
      <GuaranteesBlock />
      <GameMonth />
      <FeedBackBlock />
    </>
  )
}
