import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import ProductDetail from "./pages/ProductDetail";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import Footer from "./components/Footer";
import NotFount from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage";
function App() {
  const [count, setCount] = useState(0);

  return (
    //! tarayıcıdaki url'e göre sayfalama yapmamızı sağlar
    <BrowserRouter>
      <div className="page">
        {/* Bütün sayfalar tarafından ortak kullanılacak bileşenler routes dışında yazarız */}
        <Header />

        <Routes>
          {/*Route: projedeki her sayfa için tanımlanır 
        Route'a yol ve o yol için ekrana basılacak bileşeni veririz*/}
          <Route path="/" element={<MainPage />} />
          <Route path="/urunler" element={<ProductsPage />} />

          {/* dinamik sayfalama(route) */}
          <Route path="/urun/:id" element={<ProductDetail />} />

          {/* nested routes -> içiçe yollar*/}
          <Route path="/kategori" element={<CategoryPage />}>
            <Route path="hikaye" element={<h1>HİKAYE</h1>} />
            <Route path="roman" element={<h1>ROMAN</h1>} />
          </Route>

          {/* tanımsız bir route a yönlenirse */}
          <Route path="*" element={<NotFount />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
