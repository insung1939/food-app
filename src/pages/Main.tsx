//router
import { useNavigate } from 'react-router-dom'
//style
import styled from 'styled-components'
import { color } from '../styles/color'
//components
import FoodInfo from '../components/FoodInfo'
//library for infinite scroll
import { useInView } from 'react-intersection-observer'
//type
import { useFetchFoodList } from '../hooks/useFetchFoodList'

// ----------------------------------------------------------

export default function Main() {
  const navigate = useNavigate()
  const [ref, inView] = useInView()
  //음식 리스트 데이터를 가져오는 훅
  const { foodListData } = useFetchFoodList(inView)

  //상세 음식 페이지로 이동하는 함수
  const goDetailPage = (id: number) => {
    navigate('/detail', { state: id })
  }

  return (
    <>
      <MainTitle>푸드</MainTitle>
      <RankTitle>🥗 샐러드 영양소 비율 랭킹</RankTitle>
      {foodListData &&
        foodListData.map((food, index) => (
          <FoodInfo foodData={food} handleClick={() => goDetailPage(food.id)} key={index} />
        ))}
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
