import React from "react"
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute.jsx"
import Home from "./pages/home.jsx"
import Login from "./pages/login.jsx"
import NotFound from "./pages/notFound.jsx"
import Register from "./pages/Register.jsx"

function LogOut(){
  localStorage.clear()
  return<Navigate to="./login"/>
}
function RegisterAndLogOut(){
  localStorage.clear()
  return<Register/>
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          }
        />
        <Route path ="/login" element={<Login/>}/>
        <Route path ="/logOut" element={<LogOut/>}/>
        <Route path ="/register" element={<RegisterAndLogOut/>}/>
        <Route path ="*" element={<NotFound/>}></Route>

      </Routes>



    </BrowserRouter>
  )
}

export default App
