import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export default function Header() {
  const navigate = useNavigate()
  const goBack = () => {
    navigate('/')
  }
  return (
    <div style={{ height: '44px' }}>
      <BackArrow src="/images/backBtn.png" alt="backBtn" onClick={goBack} />
    </div>
  )
}

const BackArrow = styled.img`
  height: 24px;
  width: 24px;
  padding: 10px 0;
`
