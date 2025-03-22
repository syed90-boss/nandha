import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Products from "./Products";
import Checkout from "./Checkout";
import Footer from "./Footer";
import Thankyou from "./Thankyou";
 import Mycart from "./Mycart";
function App() {
  return (
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Header />}>

              <Route path="/" index element={<Home />} />
              <Route path="/products" element={<Products />} /> 
               <Route path="/checkout" element={<Checkout />} /> 
                 <Route path="/mycart" element={<Mycart />} />
                  <Route path="/thankyou" element={<Thankyou />} />
                   



        </Route>
    


     </Routes>
     </BrowserRouter>
  );
}

export default App;
