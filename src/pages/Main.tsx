import styled from 'styled-components'
import { color } from '../types/color'
import FoodInfo from '../components/FoodInfo'
import { useInView } from 'react-intersection-observer'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { IFoodList } from '../types/foodList'

export default function Main() {
  const FOOD_LIST_URL = 'https://nrisecodingtest.s3.ap-northeast-2.amazonaws.com/fe/food/food_main_list.json'
  const [foodListData, setFoodListData] = useState<IFoodList[]>([])
  const [count, setCount] = useState<number>(0)
  const [ref, inView] = useInView()

  const fetchFoodList = async () => {
    try {
      const { data: response } = await axios.get(FOOD_LIST_URL)
      setFoodListData(response.slice(0, count + 10))
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchFoodList()
    return
  }, [])

  useEffect(() => {
    if (inView) {
      setCount(count + 10)
      fetchFoodList()
    }
  }, [inView])

  return (
    <>
      <MainTitle>푸드</MainTitle>
      <RankTitle>🥗 샐러드 영양소 비율 랭킹</RankTitle>
      {foodListData && foodListData.map((food, index) => <FoodInfo foodData={food} key={index} />)}
      <div ref={ref} />
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
