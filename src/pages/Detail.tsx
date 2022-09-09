import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import styled from 'styled-components'
import { color } from '../types/color'
import { getGradeBg } from '../utils/common'
import { useFetchFoodDetail } from '../hooks/useFetchFoodDetail'

export default function Detail() {
  const location = useLocation()
  const foodId = location.state as number
  const { foodDetailData } = useFetchFoodDetail(foodId)

  return (
    <>
      <Header />
      {foodDetailData && (
        <>
          <DetailFoodImage
            style={{
              backgroundImage: foodDetailData.image_url ? `url(${foodDetailData.image_url})` : '',
              backgroundColor: foodDetailData.image_url ? '' : `${color.replacedImg}`,
            }}
          >
            <GradientBox>
              <div style={{ padding: '40px 16px 16px' }}>
                <DetailFoodName>{foodDetailData.name}</DetailFoodName>
                <DetailFoodBrand>{foodDetailData.brand}</DetailFoodBrand>
                <DetailFoodPrice>{foodDetailData.price}원</DetailFoodPrice>
              </div>
            </GradientBox>
          </DetailFoodImage>

          <TitleStyle>영양소 비율</TitleStyle>
          <InfoStyle>
            전문가들이 권장하는 탄수화물 5 : 단백질 2 : 지방3 비율을 기준으로 A~C까지의 등급으로 표기하였습니다.
          </InfoStyle>
          <NutrientGrid>
            <GradeInfoBox style={{ backgroundColor: getGradeBg(foodDetailData.nutrition_grade) }}>
              <StrongTextStyle style={{ fontSize: '40px' }}>{foodDetailData.nutrition_grade}</StrongTextStyle>
              <BottomTextStyle>영양소 비율 등급</BottomTextStyle>
            </GradeInfoBox>
            <InfoBox>
              <StrongTextStyle style={{ fontSize: '30px' }}>{foodDetailData.nutrients_ratio[0].ratio}%</StrongTextStyle>
              <SmallTextStyle>적정 비율 {foodDetailData.nutrients_ratio[0].recommended}%</SmallTextStyle>
              <PercentDiff style={{ color: foodDetailData.nutrients_ratio[0].diff > 0 ? color.red : color.green }}>
                {foodDetailData.nutrients_ratio[0].diff > 0 ? '+' : ''}
                {foodDetailData.nutrients_ratio[0].diff}%
              </PercentDiff>
              <BottomTextStyle>탄수화물</BottomTextStyle>
            </InfoBox>
            <InfoBox>
              <StrongTextStyle style={{ fontSize: '30px' }}>{foodDetailData.nutrients_ratio[1].ratio}%</StrongTextStyle>
              <SmallTextStyle>적정 비율 {foodDetailData.nutrients_ratio[1].recommended}%</SmallTextStyle>
              <PercentDiff style={{ color: foodDetailData.nutrients_ratio[1].diff > 0 ? color.red : color.green }}>
                {foodDetailData.nutrients_ratio[1].diff > 0 ? '+' : ''}
                {foodDetailData.nutrients_ratio[1].diff}%
              </PercentDiff>
              <BottomTextStyle>단백질</BottomTextStyle>
            </InfoBox>
            <InfoBox>
              <StrongTextStyle style={{ fontSize: '30px' }}>{foodDetailData.nutrients_ratio[2].ratio}%</StrongTextStyle>
              <SmallTextStyle>적정 비율 {foodDetailData.nutrients_ratio[2].recommended}%</SmallTextStyle>
              <PercentDiff style={{ color: foodDetailData.nutrients_ratio[2].diff > 0 ? color.red : color.green }}>
                {foodDetailData.nutrients_ratio[2].diff > 0 ? '+' : ''}
                {foodDetailData.nutrients_ratio[2].diff}%
              </PercentDiff>
              <BottomTextStyle>지방</BottomTextStyle>
            </InfoBox>
          </NutrientGrid>
          <TitleStyle>칼로리 정보</TitleStyle>
          <InfoStyle>하루 2000칼로리의 식단을 기준으로 합니다.</InfoStyle>
          <InfoBox style={{ height: '78px', marginTop: '16px' }}></InfoBox>
        </>
      )}
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

const TitleStyle = styled.h2`
  color: ${color.white};
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 8px;
  border-bottom: 1px solid ${color.borderColor};
`

const InfoStyle = styled.p`
  color: ${color.lightGray};
  margin-top: 8px;
  font-weight: 400;
  font-size: 14px;
`

const NutrientGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 140px);
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  padding: 8px 0 40px;
`

const GradeInfoBox = styled.div`
  border-radius: 6px;
  padding: 16px;
`
const InfoBox = styled.div`
  border-radius: 6px;
  padding: 16px;
  background-color: ${color.boxBgColor};
  position: relative;
`

const StrongTextStyle = styled.span`
  color: ${color.white};
  font-weight: 700;
`

const PercentDiff = styled.span`
  position: absolute;
  right: 16px;
  top: 16px;
  font-weight: 700;
  font-size: 18px;
`

const SmallTextStyle = styled.p`
  font-weight: 400;
  color: ${color.lightGray};
  font-size: 12px;
`

const BottomTextStyle = styled.p`
  margin-top: 30px;
  font-weight: 400;
  color: ${color.white};
  font-size: 14px;
`

// style={{ color: getNutritionRatio('carbs')?.diff > 0 ? color.red : color.green }}
