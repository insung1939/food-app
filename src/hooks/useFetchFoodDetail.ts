import axios from 'axios'
import { useEffect, useState } from 'react'
import { IFoodDetailList } from '../types/foodDetailList'

export const useFetchFoodDetail = (foodId: number) => {
  const FOOD_DETAIL_LIST_URL = 'https://nrisecodingtest.s3.ap-northeast-2.amazonaws.com/fe/food/food_detail_list.json'
  const [foodDetailData, setFoodDetailData] = useState<IFoodDetailList>()

  useEffect(() => {
    const fetchFoodDetail = async () => {
      try {
        const { data: response } = await axios.get(FOOD_DETAIL_LIST_URL)
        const filteredData: IFoodDetailList = response.filter((food: IFoodDetailList) => food.id === foodId)[0]
        setFoodDetailData(filteredData)
      } catch (e) {
        console.error(e)
      }
    }
    fetchFoodDetail()
  }, [])

  return { foodDetailData }
}
