import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import PostPage from './pages/PostPage';
import Contact from "./pages/Contact"
import AboutUs from './pages/AboutUs';
import NavPage from './pages/NavPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      {/* <PostPage /> */}
      {/* <AboutUs /> */}
      {/* <NavPage /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
