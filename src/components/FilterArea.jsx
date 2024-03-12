import { useParams, useSearchParams } from "react-router-dom";

const FilterArea = () => {
  //useparams url deki arama parametrelerini yönetmemizi sağlar
  // geriye dizi içindeki iki eleman döndürür
  // 1. urldeki arama parametreleri
  // 2. bunları değiştirmeye yarayan metot
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    //console.log(e.target.value);
    //eklenecek parametreyi belirliyoruz
    searchParams.set("sirala", e.target.value);
    //url yi güncelliyoruz
    setSearchParams(searchParams);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //eklenecek parametreyi belirliyoruz
    searchParams.set("aramaTerimi", e.target[0].value);
    //url yi güncelliyoruz
    setSearchParams(searchParams);
  };
  return (
    <div className="mt-4 d-flex gap-3 justify-content-between align-items-center">
      <div className="d-flex align-items-center gap-3">
        <label>Sırala</label>
        <select onChange={handleChange} className="form-select">
          <option>a-z</option>
          <option>z-a</option>
        </select>
      </div>
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-between gap-2"
      >
        <input
          className="form-control"
          type="text"
          placeholder="Kitap İsmi Giriniz"
        />
        <button className="btn btn-primary ">Ara</button>
      </form>
    </div>
  );
};

export default FilterArea;
