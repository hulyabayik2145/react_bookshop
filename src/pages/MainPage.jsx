//import gif from "../assets/welcome.gif";

import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <div className="container d-flex flex-column align-items-center gap-5 my-5">
      <h1>Hoşgeldiniz!</h1>
      {/*  img-fluid sınıfı kullanılarak resimler her durumda uyum sağlar.

"rounded" sınıfı, resmin köşelerini yuvarlatır. Bu, resmin daha yumuşak ve hoş bir görünüm kazanmasını sağlar. */}
      <img className="img-fluid rounded" src={"/welcome.gif"} />
      <p>
        <Link to={"/urunler"}>Ürünler Sayfasında</Link>Yeni çıkan Bütün
        Kitaplara Ulaşabilirsiniz
      </p>
    </div>
  );
};
export default MainPage;
