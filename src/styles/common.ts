import styled from 'styled-components'
import { color } from './color'

//common styles

export const PercentDiff = styled.span`
  position: absolute;
  right: 16px;
  top: 16px;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
`

export const SmallTextStyle = styled.p`
  font-weight: 400;
  color: ${color.lightGray};
  font-size: 12px;
  line-height: 17px;
`

export const InfoBox = styled.div`
  border-radius: 6px;
  padding: 16px;
  background-color: ${color.boxBgColor};
  position: relative;
`

export const StrongTextStyle = styled.span`
  color: ${color.white};
  font-weight: 700;
`

export const BottomTextStyle = styled.p`
  margin-top: 30px;
  font-weight: 400;
  color: ${color.white};
  font-size: 14px;
  line-height: 20px;
`
