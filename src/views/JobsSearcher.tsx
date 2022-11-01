import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';

import { QueryJob } from '@/models';
import { truncate } from '@/utilities';
import { getAllFilteredJobs } from '@/services/jobsService/getAllFilteredJobs';

export function JobsSearcher() {
  const [jobs, setJobs] = useState<QueryJob[]>([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  const handleChange = (page: number) => {
    setPage(page);
  };

  const [searchParams] = useSearchParams();

  useEffect(() => {
    setIsFetching(true);
    const getJobs = async () => {
      const params = Object.fromEntries(searchParams.entries());
      const response = await getAllFilteredJobs(params, page);
      window.scrollTo(0, 0);
      setJobs(response);
      setIsFetching(false);
    };
    getJobs();
  }, [searchParams, page]);

  return (
    <>
      <article className="container">
        {jobs.map((job, i) => {
          return (
            <div
              key={i}
              className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              id={job.id}
            >
              <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {job.attributes.title}
              </h1>
              <div className="font-normal text-gray-700 dark:text-gray-400">
                <p className="container__description-title">Descripcion:</p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: truncate(job.attributes.description, 150),
                  }}
                ></p>
              </div>

              <div className="container__description">
                <a
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-center"
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
        <Pagination
          count={9}
          variant="outlined"
          shape="rounded"
          disabled={isFetching}
          onChange={(e, page) => handleChange(page)}
        />
      </div>
    </>
  );
}
