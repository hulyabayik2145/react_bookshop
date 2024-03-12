import { NavLink, Outlet, useNavigate, Navigate } from "react-router-dom";

const CategoryPage = () => {
  const user = {
    name: "ahmet",
    type: "user",
  };
  if (user.type !== "user") {
    //kullanıcı tipi admin değil ise bu sayfayı fgösterme
    //kullanıcıyı anasayfaya yönlendir.
    //?1) hook kullanımı
    //react uarı verir
    // navigate('/');

    //?2) bileşen kullanımı
    return <Navigate to={"/"} replace />;
  }
  return (
    <div className="d-flex align-items-center gap-4 p-5">
      <aside className="d-flex flex-column bg-white p-5 rounded-4">
        <NavLink to={"/kategori/hikaye"}>Hikaye</NavLink>
        <NavLink to={"/kategori/roman"}>Roman</NavLink>
      </aside>
      {/* ASIL SAYFA İÇERİĞİ BURAYA GELECEK 
      alt route un kapsayıcı route içersinde 
      hangi noktada ekrana basılacağını belirler.
      
      
      */}
      <Outlet />
    </div>
  );
};

export default CategoryPage;
