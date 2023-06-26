import Header from './components/header';
import Footer from './components/footer';
import Cards from './components/cards';
import Navbar from './components/navbar';
import Carousel from './components/carousel';
import Accordion from './components/accordion';
import { Route,Routes } from 'react-router-dom';
import ContactUs from './components/contactus';
import International from './components/international';
import National from './components/national';
import Research from './components/research';
import SignIn from './components/signin';
import SignUp from './components/signup';
import AboutUs from './components/aboutus';
import Notification from './components/notification';
import Information from './components/information';
import RegistrationForm from './components/form';

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/notification" element={<Notification/>}/>
        <Route path="/information" element={<Information/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/faq" element={<Accordion/>}/>
      </Routes>
      <Routes>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/form" element={<RegistrationForm/>}/>
      </Routes>
      
      
      <Carousel/>
      <Cards/>
      <Routes>
      <Route path="/international" element={<International/>}/>
      <Route path="/national" element={<National/>}/>
      <Route path="/research" element={<Research/>}/>
      
      </Routes>
      
      <Footer/>
      
    
    </div>
  );
}

export default App;
