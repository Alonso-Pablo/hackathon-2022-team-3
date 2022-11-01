import axios from 'axios';
import { useEffect, useState } from 'react';
export interface CategoriesInterface {}

import Pagination from '@mui/material/Pagination';
import { Link } from 'react-router-dom';
import { Search } from '../Search';

const Categories: React.FC<CategoriesInterface> = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);

  const [cantPages, setCantPages] = useState(0);

  const [modal, setModal] = useState([]);
  const [modalTogle, setModalTogle] = useState(false);

  const changeModal = (el: never) => {
    setModal([el]);
    setModalTogle(!modalTogle);
  };

  const handleChange = (p: number) => {
    setPage(p);
    window.scroll(0, 0);
  };

  let query = new URLSearchParams(window.location.search);

  let category = query.get('categoryID');
  console.log(category);

  const APIGet = `https://www.getonbrd.com/api/v0/categories/${category}/jobs?per_page=9&page=${page}`;

  useEffect(() => {
    const endPoint = APIGet;
    axios.get(endPoint).then((response) => {
      const apiData = response.data;
      const apiAt = apiData.data;
      //console.log(apiAt)
      setJobs(apiAt);
    });
  }, [page]);

  const APIcompleta = `https://www.getonbrd.com/api/v0/categories/${category}/jobs`;

  useEffect(() => {
    const endPoint = APIcompleta;
    axios.get(endPoint).then((response) => {
      const apiData = response.data;
      const apiAt = apiData.data;
      //console.log(apiAt)
      const apiAtL = apiAt.length;
      console.log(apiAtL);
      const paginas = apiAtL / 9;
      const paginasMath = Math.ceil(paginas);
      console.log(paginasMath);
      setCantPages(paginasMath);
    });
  }, [setCantPages]);

  function truncate(str: string, n: number) {
    return str?.length > n ? str.substr(0, n - 1) + ' ...' : str;
  }

  return (
    <>
      <h2 className="subt__cat">Empleos con la categoria {category}</h2>

      <article className="container">
        {jobs.map((el: any, i: any) => {
          return (
            <div key={i} className="container__card" id={el.id}>
              <h1>{el.attributes.title}</h1>
              <div className="container__description">
                <p className="container__description-title">Descripcion:</p>
                {/*<p>{truncate(el.attributes.description, 150)}</p>*/}
                <p
                  dangerouslySetInnerHTML={{
                    __html: truncate(el.attributes.description, 150),
                  }}
                ></p>
              </div>

              <div className="container__description">
                <button
                  className="modal__principal-button"
                  onClick={() => changeModal(el)}
                >
                  Ver detalles
                </button>
              </div>
            </div>
          );
        })}
      </article>

      <div className="pagination">
        <p>Estas en la pagina {page}</p>
        <Pagination
          count={cantPages}
          variant="outlined"
          shape="rounded"
          onChange={(e: any) => handleChange(e.target.textContent)}
        />
      </div>

      <Search />
      <article className="container ">
        <Link to={`/`} className="card__cat">
          <h1>Volver al inicio</h1>
        </Link>
      </article>
      <br></br>
      {modalTogle && (
        <div className="modal" onClick={changeModal}>
          {modal.map((pop: any) => {
            return (
              <>
                <div
                  className="container__card modal__cont"
                  //onClick={(e) => e.stopPropagation()}
                >
                  <h1>{pop.attributes.title}</h1>
                  <div className="container__description">
                    <p className="container__description-title">Descripcion:</p>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: pop.attributes.description,
                      }}
                    ></p>
                    <br></br>
                    <p className="container__description-title">Beneficios:</p>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: pop.attributes.benefits,
                      }}
                    ></p>

                    <br></br>
                    <div className="container__description">
                      <a
                        href={pop.links.public_url}
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        Ver mas de esta oferta en GetOnBoard
                      </a>
                      <br></br>
                      <button onClick={changeModal} className="modal__close">
                        Cerrar Modal
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Categories;
