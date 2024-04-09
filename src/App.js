import HomePage from './Components/HomePage';
import LoginPage from './Components/Login';
import Signup from './Components/Signup';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
