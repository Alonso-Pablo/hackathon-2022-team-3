export interface SearchInterface {}
import { useNavigate } from 'react-router-dom';

const Search: React.FC<SearchInterface> = () => {
  const history = useNavigate();

  const submitHandler = (e: any) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();
    console.log(`ESTA ES LA KEYWORD ${keyword}`);

    if (keyword.length === 0) {
      window.alert(`Ingrese una busqueda...`);
    } else {
      history(`/resultado?key=${keyword}`);
      e.currentTarget.keyword.value = '';
      window.scroll(0, 0);
    }
  };

  return (
    <>
      <div className="search__container">
        <hr />

        <form className="search__form" onSubmit={submitHandler}>
          <div className="search__form-input-cont">
            <p>Prefieres buscar por palabra clave...?</p>
            <input
              className="search__form-input"
              type="text"
              name="keyword"
              placeholder="Buscar por palabra clave..."
            />
          </div>

          <button type="submit">Buscar</button>
        </form>
        <hr />
      </div>
    </>
  );
};

export default Search;
