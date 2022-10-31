import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';

import { QueryJob } from '@/models';
import { getJobsByCategory } from '@/services';
import { truncate } from '@/utilities';

export function JobsByCategory() {
  const [jobs, setJobs] = useState<QueryJob[]>([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  const handleChange = (page: number) => {
    setPage(page);
  };

  const { id } = useParams();

  useEffect(() => {
    setIsFetching(true);

    getJobsByCategory(id as string, 9, page)
      .then((res) => setJobs(res.data))
      .finally(() => {
        setIsFetching(false);
      });
  }, [page, id]);

  return (
    <>
      <article className="container">
        {jobs.map((job, i) => {
          return (
            <div key={i} className="container__card" id={job.id}>
              <h1>{job.attributes.title}</h1>
              <div className="container__description">
                <p className="container__description-title">Descripcion:</p>
                {/*<p>{truncate(el.attributes.description, 150)}</p>*/}
                <p
                  dangerouslySetInnerHTML={{
                    __html: truncate(job.attributes.description, 150),
                  }}
                ></p>
              </div>

              <div className="container__description">
                <a
                  href={job.links.public_url}
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
        <p>Estás en la página {page}</p>
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          disabled={isFetching}
          onChange={(e, page) => handleChange(page)}
        />
      </div>
    </>
  );
}
