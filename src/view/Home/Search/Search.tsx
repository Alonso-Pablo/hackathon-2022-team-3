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
        <p>Prefieres buscar por palabra clave...?</p>
        <form className="search__form" onSubmit={submitHandler}>
          <input
            type="text"
            name="keyword"
            placeholder="Buscar por palabra clave..."
          />

          <button type="submit">Buscar</button>
        </form>
        <hr />
      </div>
    </>
  );
};

export default Search;
