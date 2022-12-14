//style
import styled from 'styled-components'
import { color } from '../styles/color'
//common
import { getNutritionName } from '../utils/common'
//type
import { INutritionFacts } from '../types/foodDetailList'
//components
import NutritionRange from './NutritionRange'

//props type
type IInfoProps = {
  info: INutritionFacts
}

// ----------------------------------------------------------

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

//style
const InfoName = styled.span`
  color: ${color.white};
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`

const InfoPercent = styled.span`
  color: ${color.white};
  font-weight: 700;
  line-height: 23px;
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
