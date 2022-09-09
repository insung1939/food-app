import axios from 'axios'
import { useEffect, useState } from 'react'
import { IFoodList } from '../types/foodList'

export const useFetchFoodList = () => {
  const FOOD_LIST_URL = 'https://nrisecodingtest.s3.ap-northeast-2.amazonaws.com/fe/food/food_main_list.json'
  const [foodListData, setFoodListData] = useState<IFoodList[]>([])

  useEffect(() => {
    const fetchFoodList = async () => {
      try {
        const { data: response } = await axios.get(FOOD_LIST_URL)
        setFoodListData(response)
      } catch (e) {
        console.error(e)
      }
    }
    fetchFoodList()
  }, [])

  return { foodListData }
}
