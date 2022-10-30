// impo elements
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import Nav from './components/Nav';
import Footer from './components/Footer';
//  style files
import './styles/colors.scss';
import './styles/contact.scss';
import './styles/footer.scss';
import './styles/header.scss';
import './styles/home.scss';
import './styles/mediaquery.scss';
import './styles/App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer /> 
      </BrowserRouter>

    </div>
  );
}

export default App;
