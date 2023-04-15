import "./App.css";
import Footer from "./componenets/footer/Footer";
import Header from "./componenets/header/Header";
import Hero from "./componenets/hero/Hero";
import Products from "./componenets/products/Products";
import Slider from "./componenets/slider/Slider";
import Testimonials from "./componenets/testimonials/Testimonials";
import Virtual from "./componenets/virtual/Virtual";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Products/>
      <Testimonials/>
      <Footer/>
      
    </div>
  );
}

export default App;
