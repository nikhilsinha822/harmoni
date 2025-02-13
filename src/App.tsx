import './App.css'
import { Route, Routes } from "react-router-dom"
import MainLayout from "./components/MainLayout"
import Home from './pages/Home'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCartFromLocalStorage } from "./redux/slices/cartSlice";
import { AppDispatch } from "./redux/store";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadCartFromLocalStorage());
  }, [dispatch]);

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