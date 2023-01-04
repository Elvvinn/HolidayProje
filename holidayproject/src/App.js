import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Components/LoginComponent/login';
import AboutPage from './Pages/About/about';
import HomePage from './Pages/Home/home';

function App() {
  return (
    <>

      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>

    </>
  );
}

export default App;
