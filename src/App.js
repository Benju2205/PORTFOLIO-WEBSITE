
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/productList/ProductList";



function App() {
  
  return (
    <div style={{backgroundColor:'#222', color:'white'}}>
      <Navbar/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;
