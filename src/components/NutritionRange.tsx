import styled from 'styled-components'
import { color } from '../types/color'

type INutritionProps = {
  percent: number
}

export default function NutritionRange({ percent }: INutritionProps) {
  return (
    <TotalRange>
      <PercentRange style={{ width: `${percent}%` }} />
    </TotalRange>
  )
}

const TotalRange = styled.div`
  height: 8px;
  background-color: ${color.borderColor};
  border-radius: 6px;
  width: 100%;
`

const PercentRange = styled.div`
  height: 100%;
  background-color: ${color.white};
  border-radius: 6px;
`
