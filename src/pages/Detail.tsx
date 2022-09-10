//router
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
//style
import styled from 'styled-components'
import { color } from '../styles/color'
import { InfoBox, StrongTextStyle, BottomTextStyle } from '../styles/common'
//hook
import { useFetchFoodDetail } from '../hooks/useFetchFoodDetail'
//common
import { getGradeBg } from '../utils/common'
//components
import Header from '../components/Header'
import NutritionRange from '../components/NutritionRange'
import NutritionInfo from '../components/NutritionInfo'
import RatioInfo from '../components/RatioInfo'

// ----------------------------------------------------------

export default function Detail() {
  const navigate = useNavigate()
  const location = useLocation()
  const foodId = location.state as number
  //음식상세 데이터 가져오는 훅
  const { foodDetailData } = useFetchFoodDetail(foodId)

  //구매사이트url 이동 함수
  const openUrl = (url: string) => {
    window.open(url, '_blank')
  }

  //이전 페이지 이동
  const goBack = () => {
    navigate('/')
  }

  return (
    <>
      <Header handleClick={goBack} />
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
                <DetailFoodPrice>{foodDetailData.price.toLocaleString()}원</DetailFoodPrice>
              </div>
            </GradientBox>
          </DetailFoodImage>
          <TitleStyle>영양소 비율</TitleStyle>
          <InfoStyle>
            전문가들이 권장하는 탄수화물 5 : 단백질 2 : 지방3 비율을 기준으로 A~C까지의 등급으로 표기하였습니다.
          </InfoStyle>
          <NutrientGrid>
            <GradeInfoBox style={{ backgroundColor: getGradeBg(foodDetailData.nutrition_grade) }}>
              <StrongTextStyle style={{ fontSize: '40px', lineHeight: '58px' }}>
                {foodDetailData.nutrition_grade}
              </StrongTextStyle>
              <BottomTextStyle>영양소 비율 등급</BottomTextStyle>
            </GradeInfoBox>
            {foodDetailData.nutrients_ratio.map((ratioInfo) => (
              <RatioInfo ratioInfo={ratioInfo} key={ratioInfo.name} />
            ))}
          </NutrientGrid>
          <TitleStyle>칼로리 정보</TitleStyle>
          <InfoStyle>하루 2000칼로리의 식단을 기준으로 합니다.</InfoStyle>
          <InfoBox style={{ marginTop: '16px', marginBottom: '40px' }}>
            <CalorieInfo>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CalorieRecommend>{foodDetailData.nutrition_facts[0].amount}</CalorieRecommend>
                <CalorieTotal>/{foodDetailData.nutrition_facts[0].recommended_amount}</CalorieTotal>
              </div>
              <CaloriePercent>{foodDetailData.nutrition_facts[0].ratio}%</CaloriePercent>
            </CalorieInfo>
            <NutritionRange percent={foodDetailData.nutrition_facts[0].ratio} />
          </InfoBox>
          <TitleStyle>영양소 정보</TitleStyle>
          <InfoStyle>백분율은 하루 2000칼로리의 식단을 기준으로 합니다.</InfoStyle>
          <InfoBox style={{ margin: '20px 0 16px', padding: '6px 16px 4px' }}>
            {foodDetailData.nutrition_facts.slice(1).map((info) => (
              <NutritionInfo info={info} key={info.name} />
            ))}
          </InfoBox>
          <BuyButton onClick={() => openUrl(foodDetailData.url)}>구매하기</BuyButton>
        </>
      )}
    </>
  )
}

//style
const DetailFoodImage = styled.div`
  height: 343px;
  margin: 60px 0 40px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 10px;
  z-index: 50;
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
  line-height: 35px;
`

const DetailFoodBrand = styled.span`
  color: ${color.white};
  font-weight: 400;
  margin-right: 12px;
  font-size: 14px;
  line-height: 20px;
`
const DetailFoodPrice = styled.span`
  color: ${color.white};
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
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
  line-height: 20px;
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

const CalorieInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
`

const CalorieRecommend = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: ${color.white};
  margin-right: 4px;
  line-height: 29px;
`

const CalorieTotal = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${color.lightGray};
  line-height: 17px;
`

const CaloriePercent = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${color.white};
  line-height: 26px;
`

const BuyButton = styled.button`
  border-radius: 5px;
  background-color ${color.boxBgColor};
  width: 100%;
  border: 1px solid ${color.borderGray};
  height: 40px;
  padding: 8px 0;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: ${color.gray};
  line-height: 23px;
`
