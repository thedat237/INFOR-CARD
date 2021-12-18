import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import Footer from './components/Footer/Footer';
import GlobalStyles from './components/GlobalStyles';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import QRcode from './QR code/QRcode';

function App() {

  return (
    <GlobalStyles>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={ <Login/>}/>
        </Routes>
        <Footer/>
      </div>
    </GlobalStyles>
  );
}

export default App;
