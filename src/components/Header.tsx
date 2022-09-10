import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { color } from '../types/color'

export default function Header() {
  const navigate = useNavigate()
  const goBack = () => {
    navigate('/')
  }
  return (
    <HeaderStyle>
      <BackArrow src="/images/backBtn.png" alt="backBtn" onClick={goBack} />
    </HeaderStyle>
  )
}

const HeaderStyle = styled.div`
  height: 44px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${color.black};
  z-index: 100;
`

const BackArrow = styled.img`
  height: 24px;
  width: 24px;
  padding: 10px 0;
`
