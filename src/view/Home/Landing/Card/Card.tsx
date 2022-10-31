import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../../Search';
export interface CardInterface {}

const Card: React.FC<CardInterface> = () => {
  const [category, setCategory] = useState([]);

  const APIGet = `https://www.getonbrd.com/api/v0/categories/`;

  useEffect(() => {
    const endPoint = APIGet;
    axios.get(endPoint).then((response) => {
      const apiData = response.data;
      const apiAt = apiData.data;
      setCategory(apiAt);
    });
  }, [category]);

  return (
    <>
      <h2 className="subt__cat container__card1">
        Elige una categoria de empleo
      </h2>
      <article className="container ">
        {category.map((el: any, i: any) => {
          return (
            <Link
              to={`/categories?categoryID=${el.id}`}
              key={i}
              className="card__cat"
              id={el.id}
            >
              <h1>{el.attributes.name}</h1>
            </Link>
          );
        })}
      </article>
      <Search/>
    </>
  );
};

export default Card;
