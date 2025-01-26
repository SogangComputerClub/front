import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import SignUp from './pages/signUp/signUp';
import MyPage from './pages/myPage/myPage';
import PasswordRecovery from './pages/login/passwordRecovery';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/MyPage' element={<MyPage />} />
          <Route path='/PasswordRecovery' element={<PasswordRecovery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
