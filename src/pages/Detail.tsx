import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import { IFoodDetailList } from '../types/foodDetailList'
import styled from 'styled-components'
import { color } from '../types/color'

export default function Detail() {
  const FOOD_DETAIL_LIST_URL = 'https://nrisecodingtest.s3.ap-northeast-2.amazonaws.com/fe/food/food_detail_list.json'
  const location = useLocation()
  const foodId = location.state as number
  const [foodDetailData, setFoodDetailData] = useState<IFoodDetailList>()
  const getFoodDetailData = async () => {
    const data = await axios(FOOD_DETAIL_LIST_URL)
    const filteredData = data.data.filter((food: IFoodDetailList) => food.id === foodId)[0]
    setFoodDetailData(filteredData)
  }
  useEffect(() => {
    getFoodDetailData()
  }, [])

  console.log('foodDetaildata', foodDetailData)

  return (
    <>
      <Header />
      <DetailFoodImage
        style={{
          backgroundImage: foodDetailData?.image_url ? `url(${foodDetailData?.image_url})` : '',
          backgroundColor: foodDetailData?.image_url ? '' : `${color.replacedImg}`,
        }}
      >
        <GradientBox>
          <div style={{ padding: '40px 16px 16px' }}>
            <DetailFoodName>{foodDetailData?.name}</DetailFoodName>
            <DetailFoodBrand>{foodDetailData?.brand}</DetailFoodBrand>
            <DetailFoodPrice>{foodDetailData?.price}원</DetailFoodPrice>
          </div>
        </GradientBox>
      </DetailFoodImage>
    </>
  )
}

const DetailFoodImage = styled.div`
  height: 343px;
  margin: 16px 0 40px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 10px;
`
const GradientBox = styled.div`
  background: linear-gradient(180deg, rgba(12, 15, 15, 0) 0%, rgba(12, 15, 15, 0.9) 100%);
  height: 150px;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: end;
`

const DetailFoodName = styled.h1`
  color: ${color.white};
  font-weight: 700;
  margin-bottom: 4px;
  font-size: 24px;
  word-break: keep-all;
`

const DetailFoodBrand = styled.span`
  color: ${color.white};
  font-weight: 400;
  margin-right: 12px;
  font-size: 14px;
`
const DetailFoodPrice = styled.span`
  color: ${color.white};
  font-weight: 700;
  font-size: 14px;
`
