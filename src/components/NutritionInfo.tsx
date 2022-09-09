import NutritionRange from './NutritionRange'
import { INutritionFacts } from '../types/foodDetailList'
import styled from 'styled-components'
import { color } from '../types/color'
import { getNutritionName } from '../utils/common'

type IInfoProps = {
  info: INutritionFacts
}

export default function NutritionInfo({ info }: IInfoProps) {
  return (
    <div style={{ padding: '12px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '9px' }}>
        <InfoName>{getNutritionName(info.name)}</InfoName>
        <InfoPercent>{info.ratio}%</InfoPercent>
      </div>
      <NutritionRange percent={info.ratio} />
      <div style={{ marginTop: '5px' }}>
        <InfoAmount>{info.amount}</InfoAmount>
        <InfoRecommend>/{info.recommended_amount}</InfoRecommend>
      </div>
    </div>
  )
}

const InfoName = styled.span`
  color: ${color.white};
  font-weight: 400;
  font-size: 14px;
`

const InfoPercent = styled.span`
  color: ${color.white};
  font-weight: 700;
  font-size: 16px;
`

const InfoAmount = styled.span`
  color: ${color.white};
  font-weight: 400;
  font-size: 12px;
  margin-right: 2px;
`

const InfoRecommend = styled.span`
  color: ${color.lightGray};
  font-weight: 400;
  font-size: 12px;
`
