import { useEffect, useState } from 'react'
import axios from 'axios'
//type
import { IFoodList } from '../types/foodList'

export const useFetchFoodList = (inView: boolean) => {
  const FOOD_LIST_URL = 'https://nrisecodingtest.s3.ap-northeast-2.amazonaws.com/fe/food/food_main_list.json'
  const [foodListData, setFoodListData] = useState<IFoodList[]>([])
  const [count, setCount] = useState<number>(0)

  const fetchFoodList = async () => {
    try {
      const { data: response } = await axios.get(FOOD_LIST_URL)
      setFoodListData(response.slice(0, count + 10))
    } catch (e) {
      console.error(e)
    }
  }

  //초기에 10개의 데이터를 가져온다
  useEffect(() => {
    fetchFoodList()
    return
  }, [])

  //스크롤 하단에 도달할 때 마다 10개씩 데이터를 가져온다
  useEffect(() => {
    if (inView) {
      setCount(count + 10)
      fetchFoodList()
    }
  }, [inView])

  return { foodListData }
}
