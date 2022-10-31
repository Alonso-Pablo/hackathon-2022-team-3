export interface ResultsInterface {}
import { useEffect, useState } from 'react';
import axios from 'axios';
import Search from '../Search';
import { Link } from 'react-router-dom';
import { Pagination } from '@mui/material';

const Results: React.FC<ResultsInterface> = () => {
  let query = new URLSearchParams(window.location.search);

  let keyword = query.get('key');

  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  const handleChange = (p: number) => {
    setPage(p);
    window.scroll(0, 0);
  };

  const urlNew = `https://www.getonbrd.com/api/v0/search/jobs?query=${keyword}&per_page=9&page=${page}`;

  useEffect(() => {
    const endPoint = urlNew;
    //console.log(endPoint)
    axios.get(endPoint).then((response) => {
      const jobData = response.data;
      const jobAt = jobData.data;
      console.log(jobAt);
      setResults(jobAt);
    });
  }, [results]);

  function truncate(str: string, n: number) {
    return str?.length > n ? str.substr(0, n - 1) + ' ...' : str;
  }

  return (
    <>
      <h2 className="subt__cat">
        Empleos encontrados para la busqueda: {keyword}
      </h2>

      <article className="container">
        {results.map((el: any, i: any) => {
          return (
            <div key={i} className="container__card">
              <h1>{el.attributes.title}</h1>
              <div className="container__description">
                <p className="container__description-title">Descripcion:</p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: truncate(el.attributes.description, 150),
                  }}
                ></p>
              </div>

              <div className="container__description">
                <a
                  href={el.links.public_url}
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Visita esta oferta en GetOnBoard
                </a>
              </div>
            </div>
          );
        })}
      </article>

      <div className="pagination">
        <p>Estas en la pagina {page}</p>
        <Pagination
          count={10}
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
    </>
  );
};

export default Results;
