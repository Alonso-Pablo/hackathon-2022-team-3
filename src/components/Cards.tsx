import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Category } from '@/models';
import { getCategories } from '@/services';
import { Select } from '@/components';

export function Cards() {
  const [category, setCategory] = useState<Category[]>([]);
  const navigate = useNavigate();

  const handleFiltre = (id: string) => {
    navigate(`/categories/${id}`);
  };

  useEffect(() => {
    getCategories().then((response) => setCategory(response.data));
  }, []);

  return (
    <>
      {/*  <Search /> */}
      {category.length !== 0 && (
        <Select text="Category" options={category} onChange={handleFiltre} />
      )}
    </>
  );

  /* return (
    <article className="container">
      {category.map((category) => {
        return (
          <Link
            to={`/categories/${category.id}`}
            className="card__cat"
            id={category.id}
          >
            <h1>{category.attributes.name}</h1>
          </Link>
        );
      })}
    </article>
  ); */
}
