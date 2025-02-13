import './App.css'
import { Route, Routes } from "react-router-dom"
import MainLayout from "./components/MainLayout"
import Home from './pages/Home'

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App