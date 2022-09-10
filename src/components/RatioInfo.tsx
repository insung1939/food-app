//style
import { color } from '../styles/color'
import { InfoBox, StrongTextStyle, SmallTextStyle, PercentDiff, BottomTextStyle } from '../styles/common'
//type
import { INutritionRatio } from '../types/foodDetailList'
//common
import { getNutritionName } from '../utils/common'

//props type
type IRatioInfoProps = {
  ratioInfo: INutritionRatio
}

// ----------------------------------------------------------

export default function RatioInfo({ ratioInfo }: IRatioInfoProps) {
  return (
    <InfoBox>
      <StrongTextStyle style={{ fontSize: '30px', lineHeight: '43px' }}>{ratioInfo.ratio}%</StrongTextStyle>
      <SmallTextStyle>적정 비율 {ratioInfo.recommended}%</SmallTextStyle>
      {ratioInfo.diff !== 0 && (
        <PercentDiff style={{ color: ratioInfo.diff > 0 ? color.red : color.green }}>
          {ratioInfo.diff > 0 ? '+' : ''}
          {ratioInfo.diff}%
        </PercentDiff>
      )}
      <BottomTextStyle>{getNutritionName(ratioInfo.name)}</BottomTextStyle>
    </InfoBox>
  )
}
