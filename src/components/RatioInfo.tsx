import { INutritionRatio } from '../types/foodDetailList'
import { color } from '../types/color'
import { getNutritionName } from '../utils/common'
import { InfoBox, StrongTextStyle, SmallTextStyle, PercentDiff, BottomTextStyle } from '../styles/common'

type IRatioInfoProps = {
  ratioInfo: INutritionRatio
}

export default function RatioInfo({ ratioInfo }: IRatioInfoProps) {
  return (
    <InfoBox>
      <StrongTextStyle style={{ fontSize: '30px' }}>{ratioInfo.ratio}%</StrongTextStyle>
      <SmallTextStyle>적정 비율 {ratioInfo.recommended}%</SmallTextStyle>
      <PercentDiff style={{ color: ratioInfo.diff > 0 ? color.red : color.green }}>
        {ratioInfo.diff > 0 ? '+' : ''}
        {ratioInfo.diff}%
      </PercentDiff>
      <BottomTextStyle>{getNutritionName(ratioInfo.name)}</BottomTextStyle>
    </InfoBox>
  )
}
