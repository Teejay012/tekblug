import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import PostPage from './pages/PostPage';
import Contact from "./pages/Contact"
import AboutUs from './pages/AboutUs';
import NavPage from './pages/NavPage';
import LoginPage from './pages/login-page/LoginPage';
import RegisterPage from './pages/register-page/RegisterPage';
import Profile from "./pages/profile/Profile"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/topic' element={<NavPage />} />
            <Route path='/post' element={<PostPage />} />
            <Route path='/topic/post' element={<PostPage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/Register' element={<RegisterPage />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
