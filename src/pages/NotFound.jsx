import { Link, useLocation } from "react-router-dom";
const NotFount = () => {
  const { state } = useLocation();

  return (
    <div className="container py-6">
      <img
        className="img-fluid rounded"
        src="https://cdn.dribbble.com/users/2046015/screenshots/6015680/08_404.gif"
      />
      <p className="text-center my-5">Aradığınız Sayfa bulunamadı</p>
      <div className="d-flex justify-content-center">
        <Link className="bg-primary text-white p-2 rounded" to="{/}">
          Anasayfa
        </Link>
      </div>
      {state && (
        <p className="fs-3 text-center">
          Hata Kodunuz
          <span className="badge bg-warning mx-4">{state}</span>
        </p>
      )}
    </div>
  );
};

export default NotFount;
