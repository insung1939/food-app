import styled from 'styled-components'
import { color } from '../types/color'
import FoodInfo from '../components/FoodInfo'
import { useFetchFoodList } from '../hooks/useFetchFoodList'

export default function Main() {
  const { foodListData } = useFetchFoodList()

  return (
    <>
      <MainTitle>푸드</MainTitle>
      <RankTitle>🥗 샐러드 영양소 비율 랭킹</RankTitle>
      {foodListData && foodListData.map((food, index) => <FoodInfo foodData={food} key={index} />)}
    </>
  )
}

//style
const MainTitle = styled.h1`
  padding: 44px 0 17px;
  color: ${color.white};
  font-weight: 700;
  font-size: 24px;
`

const RankTitle = styled.h2`
  margin-bottom: 24px;
  color: ${color.white};
  font-weight: 700;
  font-size: 18px;
`
