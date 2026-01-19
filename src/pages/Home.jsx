
import About from '../components/About.jsx'
import Background from '../components/Background.jsx'
import Content from '../components/Content.jsx'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import Intro from '../components/Intro.jsx'
import Products from '../components/Products.jsx'


const Home = () => {
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
