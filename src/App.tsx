import { GlobalStyle } from './styles/global'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Detail from './pages/Detail'

export default function App() {
  return (
    <GlobalStyle>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </GlobalStyle>
  )
}
