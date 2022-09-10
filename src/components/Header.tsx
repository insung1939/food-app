//style
import styled from 'styled-components'
import { color } from '../styles/color'

//type
type IClickProps = {
  handleClick: () => void
}

// ----------------------------------------------------------

export default function Header({ handleClick }: IClickProps) {
  return (
    <HeaderStyle onClick={handleClick}>
      <BackArrow src="/images/backBtn.png" alt="backBtn" />
    </HeaderStyle>
  )
}

//style
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
