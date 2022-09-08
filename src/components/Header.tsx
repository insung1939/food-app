import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export default function Header() {
  const navigate = useNavigate()
  const goBack = () => {
    navigate('/')
  }
  return (
    <HeaderLayout>
      <img src="/images/backBtn.png" alt="backBtn" style={{ height: '24px', width: '24px' }} onClick={goBack} />
    </HeaderLayout>
  )
}

const HeaderLayout = styled.div`
  height: 44px;
  padding: 10px 0;
`
