import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { color } from '../types/color'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { IFoodList } from '../types/foodList'
import FoodInfo from '../components/FoodInfo'

export default function Main() {
  const navigate = useNavigate()
  const FOOD_LIST_URL = 'https://nrisecodingtest.s3.ap-northeast-2.amazonaws.com/fe/food/food_main_list.json'
  const [foodListData, setFoodListData] = useState<IFoodList[]>()

  useEffect(() => {
    getFoodListData()
  }, [])

  const getFoodListData = async () => {
    const foodList = await axios.get(FOOD_LIST_URL)
    setFoodListData(foodList.data)
  }

  const goDetailPage = () => {
    navigate('/detail')
  }

  return (
    <>
      <MainTitle>푸드</MainTitle>
      <RankTitle>🥗 샐러드 영양소 비율 랭킹</RankTitle>
      {foodListData?.map((food, index) => (
        <FoodInfo foodData={food} key={index} onClick={goDetailPage} />
      ))}
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
  margin-bottom: 6px;
  color: ${color.white};
  font-weight: 700;
  font-size: 18px;
`
