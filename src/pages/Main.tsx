import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { color } from '../types/color'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <>
      <MainTitle>푸드</MainTitle>
      <RankTitle>🥗 샐러드 영양소 비율 랭킹</RankTitle>
    </>
  )
}

const MainTitle = styled.h1`
  padding: 44px 0 17px;
  color: ${color.white};
  font-weight: 700;
  font-size: 24px;
`

const RankTitle = styled.h2`
  margin-bottom: 6px;
  color: ${color.white};
  font-weight: 700;
  font-size: 18px;
`
