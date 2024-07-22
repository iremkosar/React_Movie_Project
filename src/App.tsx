import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login'
import Payment from "./pages/payment";
import MainLayout from "./layouts/MainLayout.tsx";
import Dashboard from "./pages/dashboard.tsx";

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route
          path="/topRated"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        
        {/* Diğer rotaları da buraya ekleyebilirsiniz */}
      </Routes>
    </Router>
  )
}

export default App
