import { useNavigate } from 'react-router-dom'
//style
import styled from 'styled-components'
import { color } from '../styles/color'
//type
import { IFoodList } from '../types/foodList'
//common
import { getGradeBg } from '../utils/common'

//props type
type IFoodInfoProps = {
  foodData: IFoodList
}

// ----------------------------------------------------------

export default function FoodInfo({ foodData }: IFoodInfoProps) {
  const navigate = useNavigate()
  const goDetailPage = () => {
    navigate('/detail', { state: foodData.id })
  }
  return (
    <FoodInfoStyle onClick={goDetailPage}>
      <FoodBox>
        <GradeStyle style={{ backgroundColor: getGradeBg(foodData.nutrition_grade) }}>
          {foodData.nutrition_grade}
        </GradeStyle>
        <FoodImg
          style={{
            backgroundImage: foodData.image_url ? `url(${foodData.image_url})` : '',
            backgroundColor: foodData.image_url ? '' : `${color.replacedImg}`,
          }}
        />
      </FoodBox>
      <div>
        <FoodBrand>{foodData.brand}</FoodBrand>
        <FoodName>{foodData.name}</FoodName>
      </div>
    </FoodInfoStyle>
  )
}

//style
const FoodInfoStyle = styled.div`
  margin: 0 auto 8px;
  display: flex;
  max-width: 400px;
`

const FoodBox = styled.div`
  border-radius: 10px;
  display: flex;
  margin-right: 12px;
  height: 96px;
`

const GradeStyle = styled.div`
  color: ${color.white};
  width: 33px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
`

const FoodImg = styled.div`
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 96px;
  background-repeat: no-repeat;
  background-size: cover;
`

const FoodBrand = styled.h6`
  margin-bottom: 2px;
  font-weight: 400;
  color: ${color.lightGray};
  font-size: 14px;
`
const FoodName = styled.p`
  color: ${color.white};
  font-weight: 400;
  font-size: 16px;
  word-break: keep-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
