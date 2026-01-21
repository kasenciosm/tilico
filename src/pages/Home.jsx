
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import About from '../components/About.jsx'
import Background from '../components/Background.jsx'
import Content from '../components/Content.jsx'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import Intro from '../components/Intro.jsx'
import Products from '../components/Products.jsx'


const Home = () => {

  const location = useLocation();

  useEffect(() => {
  if (location.state?.scrollTo) {
    const el = document.getElementById(location.state.scrollTo);
    if (!el) return;

    const yOffset = -80;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    setTimeout(() => {
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 100);
  }
}, [location]);

  return (
    <>
      <Background image="/sandwich.jpg">
      <div id='home'>
        <Header/>
      </div>
    </Background>
    <div>
      <Intro/>
      <About/>
      <Content/>
      <Products/>
      <Footer/>
    </div>
    </>
  )
}

export default Home
