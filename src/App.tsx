//router
import { Route, Routes } from 'react-router-dom'
//components
import Main from './pages/Main'
import Detail from './pages/Detail'

// ----------------------------------------------------------

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  )
}
